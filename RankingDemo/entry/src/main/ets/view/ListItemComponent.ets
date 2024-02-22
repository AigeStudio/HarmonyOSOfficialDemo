/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FontSize, FontWeight, ItemStyle, WEIGHT } from '../common/constants/Constants';
// 列表项组件
// 装饰器是用于类、结构、方法和变量上表示特殊含义的字符串，一般以 @ 开头。
// 下述代码中 @Component、@State 以及 @Prop 等都是装饰器。
// @Component 装饰器用来表示 ListItemComponent 这个结构体是一个自定义的组件，可以与其它组件进行组合
// struct 关键字表示 ListItemComponent 是一个数据结构。
// export 关键字表示 ListItemComponent 是一个可在其它地方导出使用的数据结构，在需要使用 ListItemComponent 的地方使用 import 关键字导入
// 该 ListItemComponent：import { ListItemComponent } from '../view/ListItemComponent';
@Component
export struct ListItemComponent {
  index?: number;
  private name?: Resource;
  @Prop vote: string;
  @Prop isSwitchDataSource: boolean;
  // The state is related to the font color of ListItemComponent.
  // 用 @State 装饰器装饰的变量值发生改变时会触发该变量所对应的组件 UI 自动刷新。
  @State isChange: boolean = false;

  // build 函数以声明式的方式描述该组件的 UI 结构。
  build() {
    // 下述代码中的 Row、Column、Text 等都是内置组件，由 SDK 自带提供。
    Row() {
      Column() {
        if (this.isRenderCircleText()) {
          if (this.index !== undefined) {
            this.CircleText(this.index);
          }
        } else {
          Text(this.index?.toString())
            .lineHeight(ItemStyle.TEXT_LAYOUT_SIZE)
            .textAlign(TextAlign.Center)
            .width(ItemStyle.TEXT_LAYOUT_SIZE)
            .fontWeight(FontWeight.BOLD)
            .fontSize(FontSize.SMALL)
        }
      }
      .width(ItemStyle.LAYOUT_WEIGHT_LEFT)
      .alignItems(HorizontalAlign.Start)

      Text(this.name)
        .width(ItemStyle.LAYOUT_WEIGHT_CENTER)
        .fontWeight(FontWeight.BOLDER)
        .fontSize(FontSize.MIDDLE)
        .fontColor(this.isChange ? ItemStyle.COLOR_BLUE : ItemStyle.COLOR_BLACK)
      Text(this.vote)
        .width(ItemStyle.LAYOUT_WEIGHT_RIGHT)
        .fontWeight(FontWeight.BOLD)
        .fontSize(FontSize.SMALL)
        .fontColor(this.isChange ? ItemStyle.COLOR_BLUE : ItemStyle.COLOR_BLACK)
    }
    .height(ItemStyle.BAR_HEIGHT)
    .width(WEIGHT)
    .onClick(() => {
      this.isSwitchDataSource = !this.isSwitchDataSource;
      this.isChange = !this.isChange;
    })
  }

  @Builder CircleText(index: number) {
    Row() {
      Text(index.toString())
        .fontWeight(FontWeight.BOLD)
        .fontSize(FontSize.SMALL)
        .fontColor(Color.White);
    }
    .justifyContent(FlexAlign.Center)
    .borderRadius(ItemStyle.CIRCLE_TEXT_BORDER_RADIUS)
    .size({ width: ItemStyle.CIRCLE_TEXT_SIZE,
      height: ItemStyle.CIRCLE_TEXT_SIZE })
    .backgroundColor($r('app.color.circle_text_background'))
  }

  isRenderCircleText(): boolean {
    // Just render the element before the fourth in the list.
    return this.index === 1 || this.index === 2 || this.index === 3;
  }
}