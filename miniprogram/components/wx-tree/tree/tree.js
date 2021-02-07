"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = require("./../tree");
Component({
    properties: {},
    data: {
        data: [],
        tree: {},
    },
    methods: {
        openChenge: function (_a) {
            var detail = _a.detail;
            if (detail.id) {
            }
        },
        initTree: function (options) {
            this.setData({
                tree: new tree_1.default(__assign({ el: this }, options))
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUE0QjtBQUM1QixTQUFTLENBQUM7SUFJUixVQUFVLEVBQUUsRUFBRTtJQUtkLElBQUksRUFBRTtRQUVKLElBQUksRUFBRSxFQUFFO1FBRVIsSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUtELE9BQU8sRUFBRTtRQUNQLFVBQVUsWUFBQyxFQUFVO2dCQUFSLGtCQUFNO1lBQ2pCLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTthQUdkO1FBQ0gsQ0FBQztRQUNELFFBQVEsWUFBQyxPQUFZO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFHLElBQUksY0FBSSxZQUNiLEVBQUUsRUFBRSxJQUFJLElBQ0wsT0FBTyxFQUNWO2FBQ0gsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyZWUgZnJvbSAnLi8uLi90cmVlJ1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge30sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIC8vIOaVsOaNruWIl+ihqFxuICAgIGRhdGE6IFtdLFxuICAgIC8vIOWunuS+i+aVsOaNrlxuICAgIHRyZWU6IHt9LFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuQ2hlbmdlKHsgZGV0YWlsIH0pIHtcbiAgICAgIGlmIChkZXRhaWwuaWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codHJlZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RDb21wb25lbnQoZGV0YWlsLmlkKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXRUcmVlKG9wdGlvbnM6IE9wdCl7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB0cmVlIDogbmV3IHRyZWUoe1xuICAgICAgICAgIGVsOiB0aGlzLFxuICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19