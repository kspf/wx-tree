"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tree = (function () {
    function tree(options) {
        this.el = options.el;
        this.data = options.data;
        this.initData(this.data);
    }
    tree.prototype.initData = function (arr) {
        var data = [];
        for (var i = 0; i < arr.length; i++) {
            data.push({
                disabled: arr[i].disabled,
                id: arr[i].id,
                lable: arr[i].lable,
            });
        }
        this.el.setData({
            data: data
        });
    };
    return tree;
}());
exports.default = tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFvQkE7SUFHRSxjQUFhLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHVCQUFRLEdBQVIsVUFBUyxHQUFnQjtRQUN2QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNSLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtnQkFDekIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNiLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzthQUNwQixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ2QsSUFBSSxNQUFBO1NBQ0wsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBRUQsa0JBQWdCLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8v5Lyg5YWl5Y+C5pWwXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAvLyDoioLngrlcclxuICBlbDogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LlRyaXZpYWxJbnN0YW5jZSxcclxuICAvLyDkvKDlhaXmupDmlbDmja5cclxuICBkYXRhOiBBcnJheTxEYXRhPixcclxuICAvLyBcclxufVxyXG4vL+exu+mcgOimgeWPguaVsFxyXG5pbnRlcmZhY2UgVHJlZSAge1xyXG5cclxufVxyXG4vLyBkYXRh56eN5q+P5LiA6aG5XHJcbmludGVyZmFjZSBEYXRhIHtcclxuICBsYWJsZTogc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBBcnJheTxEYXRhPixcclxuICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgaWQ6IHN0cmluZyB8IG51bWJlcixcclxufVxyXG4vLyDmoJHnu4Tku7ZcclxuY2xhc3MgdHJlZSBpbXBsZW1lbnRzIFRyZWUsT3B0aW9ucyB7XHJcbiAgZWw6IFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5Ucml2aWFsSW5zdGFuY2U7XHJcbiAgZGF0YTogQXJyYXk8RGF0YT47XHJcbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgIHRoaXMuZWwgPSBvcHRpb25zLmVsO1xyXG4gICAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cclxuICAgIHRoaXMuaW5pdERhdGEodGhpcy5kYXRhKTtcclxuICB9XHJcbiAgLy8g5p+l5om+5pWw5o2uXHJcbiAgaW5pdERhdGEoYXJyOiBBcnJheTxEYXRhPil7XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICBkaXNhYmxlZDogYXJyW2ldLmRpc2FibGVkLFxyXG4gICAgICAgIGlkOiBhcnJbaV0uaWQsXHJcbiAgICAgICAgbGFibGU6IGFycltpXS5sYWJsZSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMuZWwuc2V0RGF0YSh7XHJcbiAgICAgIGRhdGFcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgdHJlZTsiXX0=