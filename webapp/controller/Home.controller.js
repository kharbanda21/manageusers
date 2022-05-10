sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("yamaha.otc.manageusers.controller.Home", {
            onInit: function () {

            },

            onCreate: function () {
                // var oButton = oEvent.getSource(),
                var oView = this.getView();

                if (!this._pDialog) {
                    this._pDialog = Fragment.load({
                        id: oView.getId(),
                        name: "yamaha.otc.manageusers.view.create",
                        controller: this
                    }).then(function (oDialog) {
                        // this._pDialog = oDialog;
                        this.getView().addDependent(oDialog);
                        return oDialog;
                        // this._pDialog.open();
                    }.bind(this));
                }
                // else {
                //     this._pDialog.open();
                // }

                this._pDialog.then(function (oDialog) {
                    oDialog.open();
                }.bind(this));
            },

            onEdit: function () {
                // var oButton = oEvent.getSource(),
                var oView = this.getView();

                if (!this._Dialog) {
                    this._Dialog = Fragment.load({
                        id: oView.getId(),
                        name: "yamaha.otc.manageusers.view.edit",
                        controller: this
                    }).then(function (oDialog) {
                        this.getView().addDependent(oDialog);
                        return oDialog;
                    }.bind(this));
                }

                this._Dialog.then(function (oDialog) {
                    oDialog.open();
                }.bind(this));
            }

        });
    });
