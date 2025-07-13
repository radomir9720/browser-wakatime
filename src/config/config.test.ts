import { Browser } from 'webextension-polyfill';
import config from './config';

jest.mock<typeof import('webextension-polyfill')>('webextension-polyfill', () => {
  return {
    runtime: {
      getManifest: () => {
        return { version: 'test-version' };
      },
    },
  } as Browser;
});

describe('wakatime config', () => {
  it('snapshot of config', () => {
    expect(config).toMatchInlineSnapshot(`
      {
        "alert": {
          "failure": {
            "text": "There was an error while saving the options!",
            "type": "danger",
          },
          "success": {
            "text": "Options have been saved!",
            "type": "success",
          },
        },
        "apiKey": "",
        "apiUrl": "https://api.wakatime.com/api/v1",
        "colors": {
          "allGood": "",
          "lightTheme": "white",
          "notSignedIn": "red",
          "trackingDisabled": "gray",
        },
        "currentUserApiEndPoint": "/users/current",
        "detectionIntervalInSeconds": 60,
        "devSites": [
          "codepen.io",
          "codewars.com",
          "dev.to",
          "github.com",
          "hackerrank.com",
          "leetcode.com",
          "developer.mozilla.org",
          "stackoverflow.com",
          "udemy.com",
          "w3schools.com",
        ],
        "heartbeatApiEndPoint": "/users/current/heartbeats.bulk",
        "hostname": "",
        "logOnlyGroupedTabsActivity": false,
        "loggingEnabled": true,
        "loggingStyle": "deny",
        "loggingType": "domain",
        "logoutUserUrl": "https://wakatime.com/logout",
        "name": "WakaTime",
        "nonTrackableSites": [
          "chrome://",
          "about:",
        ],
        "queueName": "heartbeatsQueue",
        "socialMediaSites": [
          "facebook.com",
          "instagram.com",
          "linkedin.com",
          "pinterest.com",
          "reddit.com",
          "snapchat.com",
          "tiktok.com",
          "twitter.com",
          "whatsapp.com",
          "x.com",
          "youtube.com",
        ],
        "states": [
          "allGood",
          "trackingDisabled",
          "notSignedIn",
          "ignored",
        ],
        "summariesApiEndPoint": "/users/current/summaries",
        "theme": "light",
        "tooltips": {
          "allGood": "",
          "ignored": "This URL is ignored",
          "notSignedIn": "Not signed In",
          "trackingDisabled": "Not logging",
        },
        "trackSocialMedia": true,
        "useGroupNameAsProjectName": false,
        "version": "test-version",
      }
    `);
  });
});
