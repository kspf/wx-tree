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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUdFLGNBQWEsT0FBZ0I7UUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsdUJBQVEsR0FBUixVQUFTLEdBQWdCO1FBQ3ZCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUN6QixFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO2FBQ3BCLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDZCxJQUFJLE1BQUE7U0FDTCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUFFRCxrQkFBZ0IsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5qCR57uE5Lu2XHJcbmNsYXNzIHRyZWUgaW1wbGVtZW50cyBUcmVlLE9wdGlvbnMge1xyXG4gIGVsOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuVHJpdmlhbEluc3RhbmNlO1xyXG4gIGRhdGE6IEFycmF5PERhdGE+O1xyXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcclxuICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHJcbiAgICB0aGlzLmluaXREYXRhKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG4gIC8vIOafpeaJvuaVsOaNrlxyXG4gIGluaXREYXRhKGFycjogQXJyYXk8RGF0YT4pe1xyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuICAgIGZvcihsZXQgaT0wOyBpPGFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGFycltpXS5kaXNhYmxlZCxcclxuICAgICAgICBpZDogYXJyW2ldLmlkLFxyXG4gICAgICAgIGxhYmxlOiBhcnJbaV0ubGFibGUsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLmVsLnNldERhdGEoe1xyXG4gICAgICBkYXRhXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIHRyZWU7Il19