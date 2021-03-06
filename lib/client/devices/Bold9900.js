/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
module.exports = {

    "id": "Bold9900",
    "name": "BlackBerry Bold 9900",
    "model": "9900",
    "osName": "BlackBerry OS",
    "uuid": "42",
    "osVersion": "7",
    "manufacturer": "BlackBerry",

    "capabilities": [
        "input.touch",
        "location.gps",
        "location.maps",
        "media.audio.capture",
        "media.video.capture",
        "media.recording",
        "storage.memorycard",
        "network.bluetooth",
        "network.wlan",
        "network.3gpp"
    ],

    "screen": {
        "width": 640,
        "height": 480
    },
    "viewPort": {
        "portrait": {
            "width": 640,
            "height": 480,
            "paddingTop": 0,
            "paddingLeft": 0
        }
    },

    "ppi": 286,
    "userAgent": "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.1+ (KHTML, Like Gecko) Version/7.0.0.141 Mobile Safari/534.1",
    "platforms": ["web", "cordova", "webworks.handset"]
};
