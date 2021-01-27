"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = require("./../../components/wx-tree/tree");
var data_1 = require("./data");
Page({
    data: {},
    onLoad: function () {
        var tree = new tree_1.default({
            el: this.selectComponent("#Tree"),
            data: data_1.default
        });
        console.log(tree, "书组件");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFtRDtBQUNuRCwrQkFBOEI7QUFDOUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFDLEVBRUo7SUFDRCxNQUFNO1FBQ0osSUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUM7WUFDcEIsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO1lBQ2pDLElBQUksRUFBRSxjQUFRO1NBQ2YsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDMUIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgVHJlZSBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvd3gtdHJlZS90cmVlJztcclxuaW1wb3J0IHRyZWVEYXRhICBmcm9tICcuL2RhdGEnXHJcblBhZ2Uoe1xyXG4gIGRhdGE6e1xyXG4gICAgXHJcbiAgfSxcclxuICBvbkxvYWQoKXtcclxuICAgIGNvbnN0IHRyZWUgPSBuZXcgVHJlZSh7XHJcbiAgICAgIGVsOiB0aGlzLnNlbGVjdENvbXBvbmVudChcIiNUcmVlXCIpLFxyXG4gICAgICBkYXRhOiB0cmVlRGF0YVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0cmVlLCBcIuS5pue7hOS7tlwiKVxyXG4gIH0gXHJcbn0pIl19