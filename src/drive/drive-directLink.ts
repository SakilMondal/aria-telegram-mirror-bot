import constants = require('../.constants');
import driveAuth = require('./drive-auth');
import { google } from 'googleapis';
import dlUtils = require('../download_tools/utils');

export async function getGDindexLink(fileId: string, isGetLink?: boolean) {
    return new Promise(async (resolve, reject) => {
        if (fileId) {
            driveAuth.call((authErr, auth) => {
                if (authErr) {
                    reject(authErr);
                }
                const drive = google.drive({ version: 'v3', auth });

                drive.files.get({ fileId: fileId, fields: 'id, name, parents, mimeType', supportsAllDrives: true },
                    async (err: Error, res: any) => {
                        if (err) {
                            reject(err.message);
                        } else {
                            if (res.data) {
                                let url = dlUtils.checkTrailingSlash(constants.INDEX_DOMAIN) + encodeURIComponent(await getFilePathDrive(res.data.parents, drive) + res.data.name);
                                if (res.data.mimeType === 'application/vnd.google-apps.folder') {
                                    url += '/'
                                }
                                resolve(isGetLink ? { url: url, name: res.data.name } : url);
                            } else {
                                reject('🔥 Error: File not found: No metadata for the file returned.');
                            }
                        }
                    });
            });
        } else {
            reject('🔥 Error: Couldn\'t decode fileId from url');
        }
    });
}

async function getFilePathDrive(parents: any, drive: any) {
    let parent = parents;
    let tree = [];
    let path: string = '';
    if (parent) {
        do {
            const f = await drive.files.get({ fileId: parent[0], fields: 'id, name, parents', supportsAllDrives: true });
            parent = f.data.parents;
            if (!parent) break;
            tree.push({ 'id': parent[0], 'name': f.data.name })
        } while (true);
    }
    tree.reverse();
    for (const folder of tree) {
        path += folder.name + '/';
    }
    return path;
}
