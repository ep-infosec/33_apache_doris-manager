// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import { UserInfoContext } from '@src/common/common.context';
import { Header } from '@src/components/header/header';
import { Sidebar } from '@src/components/sidebar/sidebar';
import { useUserInfo } from '@src/hooks/use-userinfo.hooks';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Space } from './space/space';

export function SuperAdminContainer() {
    const [userInfo] = useUserInfo();

    return (
        <div>
            <UserInfoContext.Provider value={userInfo}>
                <Sidebar />
                <div style={{ marginLeft: 80 }}>
                    <Header mode="super-admin" />
                    <div>
                        <Routes>
                            <Route path="*" element={<Space />} />
                            {/* <Route path="/" element={<Navigate replace to="space" />} /> */}
                        </Routes>
                    </div>
                </div>
            </UserInfoContext.Provider>
        </div>
    );
}