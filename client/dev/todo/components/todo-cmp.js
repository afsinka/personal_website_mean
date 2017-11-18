"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_service_1 = require("../services/todo-service");
var core_2 = require("@ngx-translate/core");
var TodoCmp = /** @class */ (function () {
    function TodoCmp(_todoService, translate) {
        this._todoService = _todoService;
        this.translate = translate;
        this.title = "hello!";
        this.todos = [];
        this.todoForm = {
            "todoMessage": ""
        };
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    TodoCmp.prototype.ngOnInit = function () {
    };
    TodoCmp.prototype._getAll = function () {
        var _this = this;
        this._todoService
            .getAll()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodoCmp.prototype.add = function (message) {
        var _this = this;
        this._todoService
            .add(message)
            .subscribe(function (m) {
            _this.todos.push(m);
            _this.todoForm.todoMessage = "";
        });
    };
    TodoCmp.prototype.remove = function (id) {
        var _this = this;
        this._todoService
            .remove(id)
            .subscribe(function () {
            _this.todos.forEach(function (t, i) {
                if (t._id === id)
                    return _this.todos.splice(i, 1);
            });
        });
    };
    TodoCmp = __decorate([
        core_1.Component({
            selector: "todo-cmp",
            templateUrl: "todo/templates/todo.html",
            styleUrls: ["todo/styles/todo.css"]
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoService, core_2.TranslateService])
    ], TodoCmp);
    return TodoCmp;
}());
exports.TodoCmp = TodoCmp;
