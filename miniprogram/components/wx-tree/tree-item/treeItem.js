"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = require("./../tree");
Component({
    properties: {
        lable: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        treeId: {
            type: String || Number
        },
        tree: {
            type: Object
        }
    },
    data: {
        open: false,
    },
    methods: {
        opendir: function () {
            this.setData({
                open: !this.data.open
            });
            var id = this.data.treeId;
            var treeData = this.data.tree.data;
            var arr = tree_1.default._queryData(treeData, id);
            if (arr && arr.children.length > 0) {
                this.setData({
                    children: arr.children
                });
            }
            this.triggerEvent('openChenge', {
                id: id
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZUl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmVlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtDQUE0QjtBQUM1QixTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtTQUNiO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNLElBQUssTUFBTTtTQUN4QjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1NBQ2I7S0FDRjtJQUtELElBQUksRUFBRTtRQUVKLElBQUksRUFBRSxLQUFLO0tBR1o7SUFLRCxPQUFPLEVBQUU7UUFDUCxPQUFPO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDdEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksR0FBRyxHQUFHLGNBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXhDLElBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztnQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7aUJBQ3ZCLENBQUMsQ0FBQTthQUNIO1lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7Z0JBQzlCLEVBQUUsSUFBQTthQUNILENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gJy4uLy4uLy4uL3BhZ2VzL2luZGV4L2RhdGEnO1xuLy8gY29tcG9uZW50cy93eC10cmVlL3RyZWUtaXRlbS90cmVlSXRlbS5qc1xuaW1wb3J0IHRyZWUgZnJvbSAnLi8uLi90cmVlJ1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGxhYmxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuXG4gICAgfSxcbiAgICB0cmVlSWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyB8fCAgTnVtYmVyXG4gICAgfSxcbiAgICB0cmVlOiB7XG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIC8vIOaYr+WQpuaJk+W8gFxuICAgIG9wZW46IGZhbHNlLFxuICAgIC8vIOWtkOiKgueCuVxuICAgIC8vIGNoaWxkcmVuOiBbXSxcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgb3BlbmRpcigpe1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgb3BlbjogIXRoaXMuZGF0YS5vcGVuXG4gICAgICB9KTtcbiAgICAgIGxldCBpZCA9IHRoaXMuZGF0YS50cmVlSWQ7XG4gICAgICBsZXQgdHJlZURhdGEgPSB0aGlzLmRhdGEudHJlZS5kYXRhO1xuICAgICAgbGV0IGFyciA9IHRyZWUuX3F1ZXJ5RGF0YSh0cmVlRGF0YSwgaWQpO1xuXG4gICAgICBpZihhcnIgJiYgYXJyLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGNoaWxkcmVuOiBhcnIuY2hpbGRyZW5cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ29wZW5DaGVuZ2UnLCB7XG4gICAgICAgIGlkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pXG4iXX0=