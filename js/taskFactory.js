/**
 * Created by sunil.jhamnani on 3/17/17.
 */

var TaskFactory = (function () {

    var tasks = [];

    return {
        addTask: function (Task) {
            tasks.push(Task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        },
        getAllTask: function () {
            tasks = JSON.parse(localStorage.getItem("tasks")) || tasks;
            return tasks;
        },
        updateProgress: function (id) {
            tasks = this.getAllTask();
            var result = $.grep(tasks, function(e){ return e.id == id; });
            result[0].isCompeleted = !result[0].isCompeleted;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            return result[0].isCompeleted;

        },
        sortTask: function (callback) {
            return tasks.sort(callback);
        },
        deleteTask: function (id) {
            tasks = this.getAllTask();
            var index = tasks.findIndex(function(e){ return e.id == id; });
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        },
        getStatus: function(status) {
            switch (status) {
                case "1": return "Development";
                    break;
                case "2": return "Testing";
                    break;
                case "3": return "Rejected";
                    break;
                default: return "NA";
            }
        }
    };
})();

