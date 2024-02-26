/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import DataModel from '@bundle:com.huawei.todolist/entry/ets/viewmodel/DataModel';
import CommonConstants from '@bundle:com.huawei.todolist/entry/ets/common/constant/CommonConstant';
import ToDoItem from '@bundle:com.huawei.todolist/entry/ets/view/ToDoItem';
class ToDoListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.totalTasks = [];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.totalTasks !== undefined) {
            this.totalTasks = params.totalTasks;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    aboutToAppear() {
        this.totalTasks = DataModel.getData();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.COLUMN_SPACE });
            Column.debugLine("pages/ToDoListPage.ets(30:5)");
            Column.width(CommonConstants.FULL_LENGTH);
            Column.height(CommonConstants.FULL_LENGTH);
            Column.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
            Text.debugLine("pages/ToDoListPage.ets(31:7)");
            Text.fontSize({ "id": 16777230, "type": 10002, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
            Text.lineHeight({ "id": 16777229, "type": 10002, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
            Text.width(CommonConstants.TITLE_WIDTH);
            Text.margin({
                top: { "id": 16777232, "type": 10002, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" },
                bottom: { "id": 16777231, "type": 10002, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" }
            });
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new ToDoItem(this, { content: item }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            };
            this.forEachUpdateFunction(elmtId, this.totalTasks, forEachItemGenFunction, (item) => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ToDoListPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ToDoListPage.js.map