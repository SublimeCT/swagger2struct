const { detailedDiff } = require("deep-object-diff");

const a = {
    "schemes": [],
    "swagger": "2.0",
    "info": {
        "description": "ufo API.",
        "title": "UFO",
        "termsOfService": "http://www.examples.com/",
        "contact": {
            "name": "examples",
            "url": "http://www.examples.com/",
            "email": "examples@gmail.com"
        },
        "license": {},
        "version": "1.0"
    },
    "host": "",
    "basePath": "/",
    "paths": {
        "/areas": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "区域列表",
                "operationId": "areas.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Area"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "创建区域",
                "operationId": "areas.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "Name",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "models.Range",
                        "description": "创建订单时间",
                        "name": "create",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "预付款比例x10000",
                        "name": "pre",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每1000消耗购物券数",
                        "name": "couponno",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "利息比例 x10000",
                        "name": "interest",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "缓冲释放比例 x10000",
                        "name": "cache",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "冻结期(s)",
                        "name": "frozen",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "用户每单间隔(s)",
                        "name": "userinterval",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "同时交易单数",
                        "name": "concurrent",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "当天最多买单数",
                        "name": "day",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "当天最多买总额",
                        "name": "dayamount",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "上单比例 x10000",
                        "name": "last",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 0 关闭 1 启用",
                        "name": "status",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Area"
                        }
                    }
                }
            }
        },
        "/areas/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "区域详情",
                "operationId": "areas.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Area"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "更新区域",
                "operationId": "areas.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Name",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "创建订单时间",
                        "name": "create",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "预付款比例x10000",
                        "name": "pre",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每1000消耗购物券数",
                        "name": "couponno",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "利息比例 x10000",
                        "name": "interest",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "缓冲释放比例 x10000",
                        "name": "cache",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "冻结期(s)",
                        "name": "frozen",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "用户每单间隔(s)",
                        "name": "userinterval",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "同时交易单数",
                        "name": "concurrent",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "当天最多买单数",
                        "name": "day",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "当天最多买总额",
                        "name": "dayamount",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "上单比例 x10000",
                        "name": "last",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "排单金额范围",
                        "name": "craterange",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 0 关闭 1 启用",
                        "name": "status",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Area"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "删除区域",
                "operationId": "areas.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/areas/{id}/frozen": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    }
                ],
                "description": "areas.frozen",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "获取区域当天真实冻结周期",
                "operationId": "areas.frozen",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "integer"
                        }
                    }
                }
            }
        },
        "/commoditys": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "商品列表",
                "operationId": "commoditys.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Commodity"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "创建商品",
                "operationId": "commoditys.create",
                "parameters": [
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "类目",
                        "name": "category",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "价格",
                        "name": "price",
                        "in": "formData"
                    },
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "简介",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Commodity"
                        }
                    }
                }
            }
        },
        "/commoditys/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "商品详情",
                "operationId": "commoditys.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Commodity"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "更新商品",
                "operationId": "commoditys.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "类目",
                        "name": "category",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "价格",
                        "name": "price",
                        "in": "formData"
                    },
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "简介",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Commodity"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "删除商品",
                "operationId": "commoditys.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/feedbacks": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "反馈列表",
                "operationId": "feedbacks.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.FeedBack"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "创建反馈",
                "operationId": "feedbacks.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "根",
                        "name": "rootid",
                        "in": "formData"
                    },
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "标题",
                        "name": "title",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "类目",
                        "name": "category",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "maxLength": 200,
                        "minLength": 1,
                        "type": "string",
                        "description": "内容",
                        "name": "info",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "图片",
                        "name": "images",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.FeedBack"
                        }
                    }
                }
            }
        },
        "/feedbacks/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "反馈详情",
                "operationId": "feedbacks.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.FeedBack"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "更新反馈",
                "operationId": "feedbacks.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "标题",
                        "name": "title",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "类目",
                        "name": "category",
                        "in": "formData"
                    },
                    {
                        "maxLength": 200,
                        "minLength": 1,
                        "type": "string",
                        "description": "内容",
                        "name": "info",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 0 未回复 1 已回复",
                        "name": "status",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "图片",
                        "name": "images",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.FeedBack"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "删除反馈",
                "operationId": "feedbacks.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/globals": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "globals.global",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "global 公共"
                ],
                "summary": "公共状态",
                "operationId": "globals.global",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/globals.UserGlobal"
                        }
                    }
                }
            }
        },
        "/holidays": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "节假日列表",
                "operationId": "holidays.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Holiday"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "创建节假日",
                "operationId": "holidays.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "日期时间戳",
                        "name": "date",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Holiday"
                        }
                    }
                }
            }
        },
        "/holidays/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "节假日详情",
                "operationId": "holidays.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Holiday"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "更新节假日",
                "operationId": "holidays.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "日期时间戳",
                        "name": "date",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Holiday"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "删除节假日",
                "operationId": "holidays.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/managers": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "管理列表",
                "operationId": "managers.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Manager"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "创建管理",
                "operationId": "managers.create",
                "parameters": [
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "strings",
                        "description": "权限 ,分割",
                        "name": "permission",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "状态 0 未激活 1 激活",
                        "name": "status",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Manager"
                        }
                    }
                }
            }
        },
        "/managers/activated": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.activated",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "激活",
                "operationId": "managers.activated",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10000": {
                        "description": "用户不存在",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10001": {
                        "description": "激活码不足",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/managers/login": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    }
                ],
                "description": "managers.login",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "用户登陆",
                "operationId": "managers.login",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            }
        },
        "/managers/match": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.match",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "匹配",
                "operationId": "managers.match",
                "parameters": [
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/managers.MatchResult"
                        }
                    }
                }
            }
        },
        "/managers/trans": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.trans",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "资源转移",
                "operationId": "managers.trans",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "金额",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "enum": [
                            "amount",
                            "code",
                            "coupon"
                        ],
                        "type": "string",
                        "description": "类型 amount 余额 code 激活码 coupon 购物券",
                        "name": "ty",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "说明",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/managers/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "管理详情",
                "operationId": "managers.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Manager"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "更新管理",
                "operationId": "managers.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData"
                    },
                    {
                        "type": "strings",
                        "description": "权限 ,分割",
                        "name": "permission",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "状态 0 未激活 1 激活",
                        "name": "status",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Manager"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "删除管理",
                "operationId": "managers.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/moneyrecords": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "moneyrecords.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "moneyrecords 资金记录"
                ],
                "summary": "资金记录列表",
                "operationId": "moneyrecords.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.MoneyRecord"
                        }
                    }
                }
            }
        },
        "/moneyrecords/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "moneyrecords.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "moneyrecords 资金记录"
                ],
                "summary": "资金记录详情",
                "operationId": "moneyrecords.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.MoneyRecord"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "moneyrecords.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "moneyrecords 资金记录"
                ],
                "summary": "删除资金记录",
                "operationId": "moneyrecords.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/newss": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "新闻列表",
                "operationId": "newss.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.News"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "创建新闻",
                "operationId": "newss.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "标题",
                        "name": "title",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "内容",
                        "name": "info",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.News"
                        }
                    }
                }
            }
        },
        "/newss/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "新闻详情",
                "operationId": "newss.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.News"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "更新新闻",
                "operationId": "newss.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "标题",
                        "name": "title",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "内容",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.News"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "删除新闻",
                "operationId": "newss.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/orders": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "订单列表",
                "operationId": "orders.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/orders.ListResp"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "创建订单",
                "operationId": "orders.create",
                "parameters": [
                    {
                        "enum": [
                            "buy",
                            "sell"
                        ],
                        "type": "string",
                        "description": "类型 buy 买 sell 卖",
                        "name": "type",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "区域",
                        "name": "areaid",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "金额",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "enum": [
                            "amount",
                            "subsidy"
                        ],
                        "type": "string",
                        "description": "来源 amount 余额 subsidy 补贴",
                        "name": "source",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "商品ID",
                        "name": "comodityid",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "商品",
                        "name": "comodity",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Order"
                        }
                    }
                }
            }
        },
        "/orders/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "订单详情",
                "operationId": "orders.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Order"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "更新订单",
                "operationId": "orders.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Order"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "删除订单",
                "operationId": "orders.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/orders/{id}/withdraw": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.withdraw",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "资金记录提现",
                "operationId": "orders.withdraw",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/records": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "交易列表",
                "operationId": "records.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/records.ListResp"
                        }
                    }
                }
            }
        },
        "/records/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "交易详情",
                "operationId": "records.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Record"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "删除交易",
                "operationId": "records.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/records/{id}/pay": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.pay",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "打款确认",
                "operationId": "records.pay",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "enum": [
                            "enter",
                            "report"
                        ],
                        "type": "string",
                        "description": "动作 enter 确认 report 举报",
                        "name": "action",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "图片",
                        "name": "image",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "信息",
                        "name": "message",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Record"
                        }
                    }
                }
            }
        },
        "/sysconfigs": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "sysconfigs.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "sysconfigs SysConfig"
                ],
                "summary": "SysConfig列表",
                "operationId": "sysconfigs.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.SysConfig"
                        }
                    }
                }
            }
        },
        "/sysconfigs/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "sysconfigs.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "sysconfigs SysConfig"
                ],
                "summary": "SysConfig详情",
                "operationId": "sysconfigs.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.SysConfig"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "sysconfigs.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "sysconfigs SysConfig"
                ],
                "summary": "更新SysConfig",
                "operationId": "sysconfigs.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "models.Range",
                        "description": "每日运行时间",
                        "name": "run",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "每日注册时间 base 为每日注册人数",
                        "name": "regist",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每天激活人数限制",
                        "name": "activity",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "激活账号消耗激活码数",
                        "name": "codenum",
                        "in": "formData"
                    },
                    {
                        "type": "boolean",
                        "description": "余额提现时间限制",
                        "name": "amountwithdrawlimit",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "余额每日提现时间",
                        "name": "amountwithdrawtime",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "余额提现额度",
                        "name": "amountwithdrawamount",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "余额提现手续费率 x10000",
                        "name": "amountwithdrawpoundage",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "余额提现手续费",
                        "name": "amountwithdrawpoundagemodelsrange",
                        "in": "formData"
                    },
                    {
                        "type": "boolean",
                        "description": "补贴提现时间限制",
                        "name": "subsidywithdrawlimit",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "补贴每日提现时间",
                        "name": "subsidywithdrawtime",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "补贴提现额度",
                        "name": "subsidywithdrawamount",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "补贴提现手续费率 x10000",
                        "name": "subsidywithdrawpoundage",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "补贴提现手续费",
                        "name": "subsidywithdrawpoundagemodelsrange",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "打款超时时间",
                        "name": "paytime",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "确认超时时间",
                        "name": "confirmtime",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日所有用户提现数",
                        "name": "dayall",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日所有用户领导金额",
                        "name": "datallparent",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日每个用户提现单数",
                        "name": "withdrawday",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日每个用户领导金额",
                        "name": "dayparent",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "登录失败提示语",
                        "name": "tip",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.SysConfig"
                        }
                    }
                }
            }
        },
        "/uploads": {
            "post": {
                "security": [
                    {
                        "AppUser": []
                    },
                    {
                        "ApiKey": []
                    }
                ],
                "description": "uploads.uploads",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "utils 工具"
                ],
                "summary": "上传文件",
                "operationId": "uploads.uploads",
                "parameters": [
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "文件后缀",
                        "name": "extension",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/users": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "用户列表",
                "operationId": "users.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/users.ListResp"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "创建用户",
                "operationId": "users.create",
                "parameters": [
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "姓名",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "mobile",
                        "description": "手机号",
                        "name": "mobile",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "淘宝账号",
                        "name": "taobao",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行卡号",
                        "name": "bank",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行支行名称",
                        "name": "subbank",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行名称",
                        "name": "bankname",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "支付宝账号",
                        "name": "alipay",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "微信账号",
                        "name": "wx",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "云支付",
                        "name": "cloudpay",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "上级",
                        "name": "parent",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            }
        },
        "/users/activated": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.activated",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "激活",
                "operationId": "users.activated",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10000": {
                        "description": "用户不存在",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10001": {
                        "description": "激活码不足",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/users/autoorder": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.autoorder",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "自主排单",
                "operationId": "users.autoorder",
                "parameters": [
                    {
                        "minimum": 1,
                        "type": "integer",
                        "description": "排单天数",
                        "name": "day",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "金额",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10000": {
                        "description": "用户不存在",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/users/login": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    }
                ],
                "description": "users.login",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "用户登陆",
                "operationId": "users.login",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            }
        },
        "/users/password": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    }
                ],
                "description": "users.password",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "修改密码",
                "operationId": "users.password",
                "parameters": [
                    {
                        "type": "string",
                        "description": "旧密码",
                        "name": "old",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "新密码",
                        "name": "new",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10003": {
                        "description": "密码错误",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            }
        },
        "/users/trans": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.trans",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "资源转移",
                "operationId": "users.trans",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "金额",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "enum": [
                            "code",
                            "coupon"
                        ],
                        "type": "string",
                        "description": "类型 code 激活码 coupon 购物券",
                        "name": "ty",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "说明",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/users/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "用户详情",
                "operationId": "users.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "更新用户",
                "operationId": "users.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "姓名",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData"
                    },
                    {
                        "type": "mobile",
                        "description": "手机号",
                        "name": "mobile",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "淘宝账号",
                        "name": "taobao",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行卡号",
                        "name": "bank",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行支行名称",
                        "name": "subbank",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行名称",
                        "name": "bankname",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "支付宝账号",
                        "name": "alipay",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "微信账号",
                        "name": "wx",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "云支付",
                        "name": "cloudpay",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "上级ID",
                        "name": "parentid",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "上级",
                        "name": "parent",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "上级姓名",
                        "name": "parentname",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "上级手机",
                        "name": "parentmobile",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            -1,
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 -1 封号 0 未激活 1 激活",
                        "name": "status",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "B 钱包",
                        "name": "b",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "自动购买 天数 4 7",
                        "name": "autoorderday",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "自动购买金额",
                        "name": "autoorderamount",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "删除用户",
                "operationId": "users.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/withdraws": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "提现列表",
                "operationId": "withdraws.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Withdraw"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "创建提现",
                "operationId": "withdraws.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "提现类型 amount subsidy xiong",
                        "name": "type",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "目标",
                        "name": "target",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "Amount",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Withdraw"
                        }
                    }
                }
            }
        },
        "/withdraws/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "提现详情",
                "operationId": "withdraws.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Withdraw"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "更新提现",
                "operationId": "withdraws.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "提现类型 amount subsidy xiong",
                        "name": "type",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "目标",
                        "name": "target",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "Amount",
                        "name": "amount",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            -1,
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 -1 拒绝 0 未完成 1 已完成",
                        "name": "status",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Withdraw"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "删除提现",
                "operationId": "withdraws.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "global.RespModel": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "type": "object"
                },
                "msgid": {
                    "type": "string"
                },
                "ts": {
                    "type": "integer"
                }
            }
        },
        "globals.UserGlobal": {
            "type": "object",
            "properties": {
                "activity": {
                    "description": "激活数",
                    "type": "integer"
                },
                "curr": {
                    "description": "今日交易金额",
                    "type": "integer"
                },
                "dayactivity": {
                    "description": "今日激活数",
                    "type": "integer"
                },
                "match": {
                    "description": "匹配单数",
                    "type": "integer"
                },
                "start": {
                    "description": "启动时间",
                    "type": "integer"
                },
                "users": {
                    "description": "总会员数",
                    "type": "integer"
                },
                "withdraw": {
                    "description": "今日提现总额",
                    "type": "integer"
                }
            }
        },
        "managers.MatchResult": {
            "type": "object",
            "properties": {
                "buy_all_amount": {
                    "description": "买单总价值",
                    "type": "integer"
                },
                "buy_all_num": {
                    "description": "买单总数量",
                    "type": "integer"
                },
                "match_amount": {
                    "description": "匹配总价值",
                    "type": "integer"
                },
                "match_num": {
                    "description": "匹配数量",
                    "type": "integer"
                }
            }
        },
        "models.Area": {
            "type": "object",
            "properties": {
                "areaid": {
                    "type": "string"
                },
                "cache": {
                    "description": "缓冲释放比例 x10000",
                    "type": "integer"
                },
                "concurrent": {
                    "description": "同时交易单数",
                    "type": "integer"
                },
                "couponno": {
                    "description": "每1000消耗购物券数",
                    "type": "integer"
                },
                "craterange": {
                    "description": "排单金额范围",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "create": {
                    "description": "创建订单时间",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "day": {
                    "description": "当天最多买单数",
                    "type": "integer"
                },
                "dayamount": {
                    "description": "当天最多买总额",
                    "type": "integer"
                },
                "frozen": {
                    "description": "冻结期(s)",
                    "type": "integer"
                },
                "interest": {
                    "description": "利息比例 x10000",
                    "type": "integer"
                },
                "last": {
                    "description": "上单比例 x10000",
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "pre": {
                    "description": "预付款比例x10000",
                    "type": "integer"
                },
                "status": {
                    "description": "状态 0 关闭 1 启用",
                    "type": "integer",
                    "enum": [
                        0,
                        1
                    ]
                },
                "userinterval": {
                    "description": "用户每单间隔(s)",
                    "type": "integer"
                }
            }
        },
        "models.Commodity": {
            "type": "object",
            "properties": {
                "category": {
                    "description": "类目",
                    "type": "string"
                },
                "commodityid": {
                    "type": "string"
                },
                "info": {
                    "description": "简介",
                    "type": "string"
                },
                "name": {
                    "description": "名称",
                    "type": "string"
                },
                "price": {
                    "description": "价格",
                    "type": "integer"
                }
            }
        },
        "models.FeedBack": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "User Account",
                    "type": "string"
                },
                "category": {
                    "description": "类目",
                    "type": "string"
                },
                "feedbackid": {
                    "type": "string"
                },
                "images": {
                    "description": "图片",
                    "type": "string"
                },
                "info": {
                    "description": "内容",
                    "type": "string"
                },
                "rootid": {
                    "description": "根",
                    "type": "string"
                },
                "status": {
                    "description": "状态 0 未回复 1 已回复",
                    "type": "integer",
                    "enum": [
                        0,
                        1
                    ]
                },
                "title": {
                    "description": "标题",
                    "type": "string"
                },
                "userid": {
                    "description": "User",
                    "type": "string"
                }
            }
        },
        "models.Holiday": {
            "type": "object",
            "properties": {
                "date": {
                    "description": "日期时间戳",
                    "type": "integer"
                },
                "holidayid": {
                    "type": "string"
                },
                "name": {
                    "description": "名称",
                    "type": "string"
                }
            }
        },
        "models.Manager": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "账号",
                    "type": "string"
                },
                "managerid": {
                    "type": "string"
                },
                "name": {
                    "description": "名称",
                    "type": "string"
                },
                "password": {
                    "description": "密码",
                    "type": "string"
                },
                "permission": {
                    "description": "权限 ,分割",
                    "type": "string"
                },
                "status": {
                    "description": "状态 0 未激活 1 激活",
                    "type": "integer"
                }
            }
        },
        "models.MoneyRecord": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "User Account",
                    "type": "string"
                },
                "action": {
                    "description": "动作 recharge 充值 trans 转移 use 使用 income 收入 punish 惩罚\namount:recharge 会员管理-金币赠送\ncode:trans,use 激活码管理-PIN管理\ncoupon:trans,use 排单码管理-PIN管理",
                    "type": "string",
                    "enum": [
                        "recharge",
                        "trans",
                        "use",
                        "income"
                    ]
                },
                "areaid": {
                    "description": "区域",
                    "type": "string"
                },
                "balance": {
                    "description": "当前用户余额",
                    "type": "integer"
                },
                "info": {
                    "description": "说明",
                    "type": "string"
                },
                "moneyrecordid": {
                    "type": "string"
                },
                "num": {
                    "description": "数量",
                    "type": "integer"
                },
                "sourceorder": {
                    "description": "来源订单",
                    "type": "string"
                },
                "target": {
                    "description": "目标用户",
                    "type": "string"
                },
                "targetaccount": {
                    "description": "目标用户名称",
                    "type": "string"
                },
                "tbalance": {
                    "description": "目标用户余额",
                    "type": "integer"
                },
                "type": {
                    "description": "类型 amount subsidy code coupon xiong cache",
                    "type": "string",
                    "enum": [
                        "amount",
                        "subsidy",
                        "code",
                        "coupon",
                        "xiong"
                    ]
                },
                "userid": {
                    "description": "操作用户",
                    "type": "string"
                }
            }
        },
        "models.News": {
            "type": "object",
            "properties": {
                "info": {
                    "description": "内容",
                    "type": "string"
                },
                "newsid": {
                    "type": "string"
                },
                "title": {
                    "description": "标题",
                    "type": "string"
                }
            }
        },
        "models.Order": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "User Account",
                    "type": "string"
                },
                "amount": {
                    "description": "金额",
                    "type": "integer"
                },
                "areaid": {
                    "description": "区域",
                    "type": "string"
                },
                "comodity": {
                    "description": "商品",
                    "type": "string"
                },
                "comodityid": {
                    "description": "商品ID",
                    "type": "string"
                },
                "confirmtime": {
                    "description": "确认时间",
                    "type": "integer"
                },
                "frozen": {
                    "description": "冻结期(s)",
                    "type": "integer"
                },
                "interest": {
                    "description": "利息",
                    "type": "integer"
                },
                "matchamount": {
                    "description": "已匹配金额",
                    "type": "integer"
                },
                "orderid": {
                    "type": "string"
                },
                "source": {
                    "description": "来源 amount 余额 subsidy 补贴",
                    "type": "string",
                    "enum": [
                        "amount",
                        "subsidy"
                    ]
                },
                "speed": {
                    "description": "速度 true 加速",
                    "type": "boolean"
                },
                "status": {
                    "description": "状态 -1 关闭 0 排队 1 预付 2 尾款 3 冻结 4 完成",
                    "type": "integer"
                },
                "type": {
                    "description": "类型 buy 买 sell 卖",
                    "type": "string",
                    "enum": [
                        "buy",
                        "sell"
                    ]
                },
                "userid": {
                    "description": "操作用户",
                    "type": "string"
                },
                "username": {
                    "description": "用户昵称",
                    "type": "string"
                }
            }
        },
        "models.Range": {
            "type": "object",
            "properties": {
                "base": {
                    "description": "基数",
                    "type": "integer"
                },
                "max": {
                    "type": "integer"
                },
                "min": {
                    "type": "integer"
                }
            }
        },
        "models.Record": {
            "type": "object",
            "properties": {
                "amount": {
                    "description": "金额",
                    "type": "integer"
                },
                "areaid": {
                    "description": "买方区域",
                    "type": "string"
                },
                "buy": {
                    "description": "买方信息",
                    "type": "object",
                    "$ref": "#/definitions/models.SimpleUser"
                },
                "buyid": {
                    "description": "买方ID",
                    "type": "string"
                },
                "buyimage": {
                    "description": "打款图片",
                    "type": "string"
                },
                "buyorder": {
                    "description": "买方订单ID",
                    "type": "string"
                },
                "confirmtime": {
                    "description": "确认时间",
                    "type": "integer"
                },
                "paytime": {
                    "description": "打款时间",
                    "type": "integer"
                },
                "recordid": {
                    "type": "string"
                },
                "report": {
                    "description": "举报",
                    "type": "string"
                },
                "reportimage": {
                    "description": "举报图片",
                    "type": "string"
                },
                "sell": {
                    "description": "卖方信息",
                    "type": "object",
                    "$ref": "#/definitions/models.SimpleUser"
                },
                "sellid": {
                    "description": "卖方ID",
                    "type": "string"
                },
                "sellimage": {
                    "description": "收款图片",
                    "type": "string"
                },
                "sellorder": {
                    "description": "卖方订单ID",
                    "type": "string"
                },
                "status": {
                    "description": "状态 -3 删除 -2 超时未确认 -1 超时未打款 0 待打款 1 待确认 2 已确认",
                    "type": "integer"
                },
                "type": {
                    "description": "类型 pre 预付款 last 尾款",
                    "type": "string"
                }
            }
        },
        "models.SimpleUser": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "账号",
                    "type": "string"
                },
                "alipay": {
                    "description": "支付宝账号",
                    "type": "string"
                },
                "bank": {
                    "description": "银行卡号",
                    "type": "string"
                },
                "bankname": {
                    "description": "银行名称",
                    "type": "string"
                },
                "mobile": {
                    "description": "手机号",
                    "type": "string"
                },
                "name": {
                    "description": "姓名",
                    "type": "string"
                },
                "parent": {
                    "description": "上级",
                    "type": "string"
                },
                "parentid": {
                    "description": "上级ID",
                    "type": "string"
                },
                "parentmobile": {
                    "description": "上级手机",
                    "type": "string"
                },
                "parentname": {
                    "description": "上级姓名",
                    "type": "string"
                },
                "subbank": {
                    "description": "银行支行名称",
                    "type": "string"
                },
                "taobao": {
                    "description": "淘宝账号",
                    "type": "string"
                },
                "wx": {
                    "description": "微信账号",
                    "type": "string"
                }
            }
        },
        "models.SysConfig": {
            "type": "object",
            "properties": {
                "activity": {
                    "description": "每天激活人数限制",
                    "type": "integer"
                },
                "amountwithdrawamount": {
                    "description": "余额提现额度",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "amountwithdrawlimit": {
                    "description": "余额提现时间限制",
                    "type": "boolean"
                },
                "amountwithdrawpoundage": {
                    "description": "余额提现手续费率 x10000",
                    "type": "integer"
                },
                "amountwithdrawpoundagemodelsrange": {
                    "description": "余额提现手续费",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "amountwithdrawtime": {
                    "description": "余额每日提现时间",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "codenum": {
                    "description": "激活账号消耗激活码数",
                    "type": "integer"
                },
                "confirmtime": {
                    "description": "确认超时时间",
                    "type": "integer"
                },
                "datallparent": {
                    "description": "每日所有用户领导金额",
                    "type": "integer"
                },
                "dayall": {
                    "description": "每日所有用户提现数",
                    "type": "integer"
                },
                "dayparent": {
                    "description": "每日每个用户领导金额",
                    "type": "integer"
                },
                "paytime": {
                    "description": "打款超时时间",
                    "type": "integer"
                },
                "regist": {
                    "description": "每日注册时间 base 为每日注册人数",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "run": {
                    "description": "每日运行时间",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "subsidywithdrawamount": {
                    "description": "补贴提现额度",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "subsidywithdrawlimit": {
                    "description": "补贴提现时间限制",
                    "type": "boolean"
                },
                "subsidywithdrawpoundage": {
                    "description": "补贴提现手续费率 x10000",
                    "type": "integer"
                },
                "subsidywithdrawpoundagemodelsrange": {
                    "description": "补贴提现手续费",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "subsidywithdrawtime": {
                    "description": "补贴每日提现时间",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "sysconfigid": {
                    "type": "string"
                },
                "tip": {
                    "description": "登录失败提示语",
                    "type": "string"
                },
                "withdrawday": {
                    "description": "每日每个用户提现单数",
                    "type": "integer"
                }
            }
        },
        "models.User": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "账号",
                    "type": "string"
                },
                "alipay": {
                    "description": "支付宝账号",
                    "type": "string"
                },
                "amount": {
                    "description": "余额",
                    "type": "integer"
                },
                "autoorderamount": {
                    "description": "自动购买金额",
                    "type": "integer"
                },
                "autoorderday": {
                    "description": "自动购买 天数 4 7",
                    "type": "integer"
                },
                "b": {
                    "description": "B 钱包",
                    "type": "integer"
                },
                "bank": {
                    "description": "银行卡号",
                    "type": "string"
                },
                "bankname": {
                    "description": "银行名称",
                    "type": "string"
                },
                "cache": {
                    "description": "缓冲",
                    "type": "integer"
                },
                "cloudpay": {
                    "description": "云支付",
                    "type": "string"
                },
                "codeno": {
                    "description": "激活码",
                    "type": "integer"
                },
                "couponno": {
                    "description": "购物券",
                    "type": "integer"
                },
                "currnum": {
                    "description": "当前交易数",
                    "type": "integer"
                },
                "frozen": {
                    "description": "冻结金额",
                    "type": "integer"
                },
                "lastautoorder": {
                    "description": "上次托管购买日期",
                    "type": "integer"
                },
                "lastbuyamount": {
                    "description": "上次买入金额",
                    "type": "integer"
                },
                "lastwithdrawamount": {
                    "description": "上次卖出金额",
                    "type": "integer"
                },
                "message": {
                    "description": "被封原因",
                    "type": "string"
                },
                "mobile": {
                    "description": "手机号",
                    "type": "string"
                },
                "name": {
                    "description": "姓名",
                    "type": "string"
                },
                "parent": {
                    "description": "上级",
                    "type": "string"
                },
                "parenthosting": {
                    "description": "上级托管",
                    "type": "boolean"
                },
                "parentid": {
                    "description": "上级ID",
                    "type": "string"
                },
                "parentmobile": {
                    "description": "上级手机",
                    "type": "string"
                },
                "parentname": {
                    "description": "上级姓名",
                    "type": "string"
                },
                "sellnum": {
                    "description": "剩余卖单次数",
                    "type": "integer"
                },
                "status": {
                    "description": "状态 -1 封号 0 未激活 1 激活",
                    "type": "integer",
                    "enum": [
                        -1,
                        0,
                        1
                    ]
                },
                "sub": {
                    "description": "下级数量",
                    "type": "integer"
                },
                "subbank": {
                    "description": "银行支行名称",
                    "type": "string"
                },
                "subsidy": {
                    "description": "补贴",
                    "type": "integer"
                },
                "taobao": {
                    "description": "淘宝账号",
                    "type": "string"
                },
                "totalamount": {
                    "description": "交易排单总额",
                    "type": "integer"
                },
                "userid": {
                    "type": "string"
                },
                "wx": {
                    "description": "微信账号",
                    "type": "string"
                },
                "xiong": {
                    "description": "小熊宝",
                    "type": "integer"
                }
            }
        },
        "models.Withdraw": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "User Account",
                    "type": "string"
                },
                "amount": {
                    "description": "Amount",
                    "type": "integer"
                },
                "balance": {
                    "description": "余额",
                    "type": "integer"
                },
                "status": {
                    "description": "状态 -1 拒绝 0 未完成 1 已完成",
                    "type": "integer",
                    "enum": [
                        -1,
                        0,
                        1
                    ]
                },
                "target": {
                    "description": "目标",
                    "type": "string"
                },
                "type": {
                    "description": "提现类型 amount subsidy xiong",
                    "type": "string"
                },
                "userid": {
                    "description": "User",
                    "type": "string"
                },
                "withdrawid": {
                    "type": "string"
                }
            }
        },
        "orders.ListResp": {
            "type": "object",
            "properties": {
                "global_curr": {
                    "description": "今日交易金额",
                    "type": "integer"
                },
                "global_success": {
                    "description": "交易成功总额",
                    "type": "integer"
                },
                "global_total": {
                    "description": "总额",
                    "type": "integer"
                },
                "global_transaction": {
                    "description": "交易中总额",
                    "type": "integer"
                },
                "list": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Order"
                    }
                },
                "total": {
                    "description": "总条数",
                    "type": "integer"
                },
                "total_amount": {
                    "description": "总金额",
                    "type": "integer"
                }
            }
        },
        "records.ListResp": {
            "type": "object",
            "properties": {
                "list": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Record"
                    }
                },
                "total": {
                    "description": "总条数",
                    "type": "integer"
                },
                "total_amount": {
                    "description": "总金额",
                    "type": "integer"
                }
            }
        },
        "users.ListResp": {
            "type": "object",
            "properties": {
                "activity": {
                    "description": "今日激活",
                    "type": "integer"
                },
                "amount": {
                    "description": "余额总额",
                    "type": "integer"
                },
                "cache": {
                    "description": "缓冲总额",
                    "type": "integer"
                },
                "list": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.User"
                    }
                },
                "regist": {
                    "description": "今日注册",
                    "type": "integer"
                },
                "subsidy": {
                    "description": "补贴总额",
                    "type": "integer"
                },
                "total": {
                    "type": "integer"
                },
                "xiong": {
                    "description": "🐻总额",
                    "type": "integer"
                }
            }
        }
    },
    "securityDefinitions": {
        "ApiKey": {
            "type": "apiKey",
            "name": "X-Apikey",
            "in": "header"
        },
        "AppKey": {
            "type": "apiKey",
            "name": "X-Appkey",
            "in": "header"
        },
        "AppUser": {
            "type": "apiKey",
            "name": "appuser",
            "in": "query"
        }
    }
}

const b = {
    "schemes": [],
    "swagger": "2.0",
    "info": {
        "description": "ufo API.",
        "title": "UFO",
        "termsOfService": "http://www.examples.com/",
        "contact": {
            "name": "examples",
            "url": "http://www.examples.com/",
            "email": "examples@gmail.com"
        },
        "license": {},
        "version": "1.0"
    },
    "host": "",
    "basePath": "/",
    "paths": {
        "/areas": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "区域列表",
                "operationId": "areas.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Area"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "创建区域",
                "operationId": "areas.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "Name",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "models.Range",
                        "description": "创建订单时间",
                        "name": "create",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "预付款比例x10000",
                        "name": "pre",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每1000消耗购物券数",
                        "name": "couponno",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "利息比例 x10000",
                        "name": "interest",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "缓冲释放比例 x10000",
                        "name": "cache",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "冻结期(s)",
                        "name": "frozen",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "用户每单间隔(s)",
                        "name": "userinterval",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "同时交易单数",
                        "name": "concurrent",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "当天最多买单数",
                        "name": "day",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "当天最多买总额",
                        "name": "dayamount",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "上单比例 x10000",
                        "name": "last",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 0 关闭 1 启用",
                        "name": "status",
                        "in": "formData"
                    },
                    {
                        "type": "models.INTM",
                        "description": "奖金设置 key 天数 v 奖励比例x10000",
                        "name": "bonus",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Area"
                        }
                    }
                }
            }
        },
        "/areas/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "区域详情",
                "operationId": "areas.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Area"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "更新区域",
                "operationId": "areas.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Name",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "创建订单时间",
                        "name": "create",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "预付款比例x10000",
                        "name": "pre",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每1000消耗购物券数",
                        "name": "couponno",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "利息比例 x10000",
                        "name": "interest",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "缓冲释放比例 x10000",
                        "name": "cache",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "冻结期(s)",
                        "name": "frozen",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "用户每单间隔(s)",
                        "name": "userinterval",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "同时交易单数",
                        "name": "concurrent",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "当天最多买单数",
                        "name": "day",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "当天最多买总额",
                        "name": "dayamount",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "上单比例 x10000",
                        "name": "last",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "排单金额范围",
                        "name": "craterange",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 0 关闭 1 启用",
                        "name": "status",
                        "in": "formData"
                    },
                    {
                        "type": "models.INTM",
                        "description": "奖金设置 key 天数 v 奖励比例x10000",
                        "name": "bonus",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Area"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "areas.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "删除区域",
                "operationId": "areas.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/areas/{id}/frozen": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    }
                ],
                "description": "areas.frozen",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "areas 区域"
                ],
                "summary": "获取区域当天真实冻结周期",
                "operationId": "areas.frozen",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "integer"
                        }
                    }
                }
            }
        },
        "/commoditys": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "商品列表",
                "operationId": "commoditys.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Commodity"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "创建商品",
                "operationId": "commoditys.create",
                "parameters": [
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "类目",
                        "name": "category",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "价格",
                        "name": "price",
                        "in": "formData"
                    },
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "简介",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Commodity"
                        }
                    }
                }
            }
        },
        "/commoditys/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "商品详情",
                "operationId": "commoditys.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Commodity"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "更新商品",
                "operationId": "commoditys.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "类目",
                        "name": "category",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "价格",
                        "name": "price",
                        "in": "formData"
                    },
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "简介",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Commodity"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "commoditys.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "commoditys 商品"
                ],
                "summary": "删除商品",
                "operationId": "commoditys.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/feedbacks": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "反馈列表",
                "operationId": "feedbacks.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.FeedBack"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "创建反馈",
                "operationId": "feedbacks.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "根",
                        "name": "rootid",
                        "in": "formData"
                    },
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "标题",
                        "name": "title",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "类目",
                        "name": "category",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "maxLength": 200,
                        "minLength": 1,
                        "type": "string",
                        "description": "内容",
                        "name": "info",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "图片",
                        "name": "images",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.FeedBack"
                        }
                    }
                }
            }
        },
        "/feedbacks/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "反馈详情",
                "operationId": "feedbacks.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.FeedBack"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "更新反馈",
                "operationId": "feedbacks.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "type": "string",
                        "description": "标题",
                        "name": "title",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "类目",
                        "name": "category",
                        "in": "formData"
                    },
                    {
                        "maxLength": 200,
                        "minLength": 1,
                        "type": "string",
                        "description": "内容",
                        "name": "info",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 0 未回复 1 已回复",
                        "name": "status",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "图片",
                        "name": "images",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.FeedBack"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "feedbacks.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "feedbacks 反馈"
                ],
                "summary": "删除反馈",
                "operationId": "feedbacks.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/globals": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "globals.global",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "global 公共"
                ],
                "summary": "公共状态",
                "operationId": "globals.global",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/globals.UserGlobal"
                        }
                    }
                }
            }
        },
        "/holidays": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "节假日列表",
                "operationId": "holidays.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Holiday"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "创建节假日",
                "operationId": "holidays.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "日期时间戳",
                        "name": "date",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Holiday"
                        }
                    }
                }
            }
        },
        "/holidays/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "节假日详情",
                "operationId": "holidays.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Holiday"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "更新节假日",
                "operationId": "holidays.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "日期时间戳",
                        "name": "date",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Holiday"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "holidays.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "holidays 节假日"
                ],
                "summary": "删除节假日",
                "operationId": "holidays.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/managers": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "管理列表",
                "operationId": "managers.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Manager"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "创建管理",
                "operationId": "managers.create",
                "parameters": [
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "strings",
                        "description": "权限 ,分割",
                        "name": "permission",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "状态 0 未激活 1 激活",
                        "name": "status",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Manager"
                        }
                    }
                }
            }
        },
        "/managers/activated": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.activated",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "激活",
                "operationId": "managers.activated",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10000": {
                        "description": "用户不存在",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10001": {
                        "description": "激活码不足",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/managers/login": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    }
                ],
                "description": "managers.login",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "用户登陆",
                "operationId": "managers.login",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            }
        },
        "/managers/match": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.match",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "匹配",
                "operationId": "managers.match",
                "parameters": [
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/managers.MatchResult"
                        }
                    }
                }
            }
        },
        "/managers/trans": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.trans",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "资源转移",
                "operationId": "managers.trans",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "金额",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "enum": [
                            "amount",
                            "code",
                            "cache",
                            "coupon"
                        ],
                        "type": "string",
                        "description": "类型 amount 余额 code 激活码 coupon 购物券 cache 缓冲区",
                        "name": "ty",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "说明",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/managers/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "管理详情",
                "operationId": "managers.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Manager"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "更新管理",
                "operationId": "managers.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "名称",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData"
                    },
                    {
                        "type": "strings",
                        "description": "权限 ,分割",
                        "name": "permission",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "状态 0 未激活 1 激活",
                        "name": "status",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Manager"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "managers.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "managers 管理"
                ],
                "summary": "删除管理",
                "operationId": "managers.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/moneyrecords": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "moneyrecords.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "moneyrecords 资金记录"
                ],
                "summary": "资金记录列表",
                "operationId": "moneyrecords.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.MoneyRecord"
                        }
                    }
                }
            }
        },
        "/moneyrecords/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "moneyrecords.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "moneyrecords 资金记录"
                ],
                "summary": "资金记录详情",
                "operationId": "moneyrecords.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.MoneyRecord"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "moneyrecords.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "moneyrecords 资金记录"
                ],
                "summary": "删除资金记录",
                "operationId": "moneyrecords.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/newss": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "新闻列表",
                "operationId": "newss.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.News"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "创建新闻",
                "operationId": "newss.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "标题",
                        "name": "title",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "内容",
                        "name": "info",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.News"
                        }
                    }
                }
            }
        },
        "/newss/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "新闻详情",
                "operationId": "newss.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.News"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "更新新闻",
                "operationId": "newss.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "标题",
                        "name": "title",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "内容",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.News"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "newss.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "newss 新闻"
                ],
                "summary": "删除新闻",
                "operationId": "newss.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/orders": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "订单列表",
                "operationId": "orders.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/orders.ListResp"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "创建订单",
                "operationId": "orders.create",
                "parameters": [
                    {
                        "enum": [
                            "buy",
                            "sell"
                        ],
                        "type": "string",
                        "description": "类型 buy 买 sell 卖",
                        "name": "type",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "区域",
                        "name": "areaid",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "金额",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "enum": [
                            "amount",
                            "subsidy"
                        ],
                        "type": "string",
                        "description": "来源 amount 余额 subsidy 补贴",
                        "name": "source",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "商品ID",
                        "name": "comodityid",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "商品",
                        "name": "comodity",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Order"
                        }
                    }
                }
            }
        },
        "/orders/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "订单详情",
                "operationId": "orders.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Order"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "更新订单",
                "operationId": "orders.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Order"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "删除订单",
                "operationId": "orders.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/orders/{id}/withdraw": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "orders.withdraw",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "orders 订单"
                ],
                "summary": "资金记录提现",
                "operationId": "orders.withdraw",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/records": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "交易列表",
                "operationId": "records.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/records.ListResp"
                        }
                    }
                }
            }
        },
        "/records/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "交易详情",
                "operationId": "records.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Record"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "删除交易",
                "operationId": "records.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/records/{id}/pay": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.pay",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "打款确认",
                "operationId": "records.pay",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "enum": [
                            "enter",
                            "report"
                        ],
                        "type": "string",
                        "description": "动作 enter 确认 report 举报",
                        "name": "action",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "图片",
                        "name": "image",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "信息",
                        "name": "message",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Record"
                        }
                    }
                }
            }
        },
        "/records/{id}/timeout": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "records.timeout",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "records 交易"
                ],
                "summary": "超时处理",
                "operationId": "records.timeout",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "enum": [
                            "enter",
                            "rollback"
                        ],
                        "type": "string",
                        "description": "动作 enter 确认 rollback 回滚",
                        "name": "action",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Record"
                        }
                    }
                }
            }
        },
        "/sysconfigs": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "sysconfigs.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "sysconfigs SysConfig"
                ],
                "summary": "SysConfig列表",
                "operationId": "sysconfigs.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.SysConfig"
                        }
                    }
                }
            }
        },
        "/sysconfigs/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "sysconfigs.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "sysconfigs SysConfig"
                ],
                "summary": "SysConfig详情",
                "operationId": "sysconfigs.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.SysConfig"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "sysconfigs.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "sysconfigs SysConfig"
                ],
                "summary": "更新SysConfig",
                "operationId": "sysconfigs.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "系统运行开始时间",
                        "name": "start",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "每日运行时间",
                        "name": "run",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "每日注册时间 base 为每日注册人数",
                        "name": "regist",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每天激活人数限制",
                        "name": "activity",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "激活账号消耗激活码数",
                        "name": "codenum",
                        "in": "formData"
                    },
                    {
                        "type": "boolean",
                        "description": "余额提现时间限制",
                        "name": "amountwithdrawlimit",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "余额每日提现时间",
                        "name": "amountwithdrawtime",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "余额提现额度",
                        "name": "amountwithdrawamount",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "余额提现手续费率 x10000",
                        "name": "amountwithdrawpoundage",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "余额提现手续费",
                        "name": "amountwithdrawpoundagemodelsrange",
                        "in": "formData"
                    },
                    {
                        "type": "boolean",
                        "description": "补贴提现时间限制",
                        "name": "subsidywithdrawlimit",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "补贴每日提现时间",
                        "name": "subsidywithdrawtime",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "补贴提现额度",
                        "name": "subsidywithdrawamount",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "补贴提现手续费率 x10000",
                        "name": "subsidywithdrawpoundage",
                        "in": "formData"
                    },
                    {
                        "type": "models.Range",
                        "description": "补贴提现手续费",
                        "name": "subsidywithdrawpoundagemodelsrange",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "打款超时时间",
                        "name": "paytime",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "确认超时时间",
                        "name": "confirmtime",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日所有用户提现数",
                        "name": "dayall",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日所有用户领导金额",
                        "name": "datallparent",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日每个用户提现单数",
                        "name": "withdrawday",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日每个用户领导金额",
                        "name": "dayparent",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日激活数基",
                        "name": "ex_day_activity",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "激活数基",
                        "name": "ex_activity",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "每日注册数基",
                        "name": "ex_day_regist",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "注册数基",
                        "name": "ex_regist",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "今日预购基",
                        "name": "ex_day_buy",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "今日挂卖基",
                        "name": "ex_day_sell",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "登录失败提示语",
                        "name": "tip",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.SysConfig"
                        }
                    }
                }
            }
        },
        "/uploads": {
            "post": {
                "security": [
                    {
                        "AppUser": []
                    },
                    {
                        "ApiKey": []
                    }
                ],
                "description": "uploads.uploads",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "utils 工具"
                ],
                "summary": "上传文件",
                "operationId": "uploads.uploads",
                "parameters": [
                    {
                        "maxLength": 20,
                        "minLength": 1,
                        "enum": [
                            "png",
                            "gif",
                            "jpeg",
                            "jpg"
                        ],
                        "type": "string",
                        "description": "文件后缀",
                        "name": "extension",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/users": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "用户列表",
                "operationId": "users.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/users.ListResp"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "创建用户",
                "operationId": "users.create",
                "parameters": [
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "姓名",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "mobile",
                        "description": "手机号",
                        "name": "mobile",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "淘宝账号",
                        "name": "taobao",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行卡号",
                        "name": "bank",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行支行名称",
                        "name": "subbank",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行名称",
                        "name": "bankname",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "支付宝账号",
                        "name": "alipay",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "微信账号",
                        "name": "wx",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "云支付",
                        "name": "cloudpay",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "上级",
                        "name": "parent",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            }
        },
        "/users/activated": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.activated",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "激活",
                "operationId": "users.activated",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10000": {
                        "description": "用户不存在",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10001": {
                        "description": "激活码不足",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/users/autoorder": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.autoorder",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "自主排单",
                "operationId": "users.autoorder",
                "parameters": [
                    {
                        "minimum": 1,
                        "type": "integer",
                        "description": "排单天数",
                        "name": "day",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "金额",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10000": {
                        "description": "用户不存在",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "10002": {
                        "description": "状态不对",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/users/login": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    }
                ],
                "description": "users.login",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "用户登陆",
                "operationId": "users.login",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            }
        },
        "/users/password": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppKey": []
                    }
                ],
                "description": "users.password",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "修改密码",
                "operationId": "users.password",
                "parameters": [
                    {
                        "type": "string",
                        "description": "旧密码",
                        "name": "old",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "新密码",
                        "name": "new",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "10003": {
                        "description": "密码错误",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            }
        },
        "/users/trans": {
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.trans",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "资源转移",
                "operationId": "users.trans",
                "parameters": [
                    {
                        "type": "string",
                        "description": "账号",
                        "name": "account",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "金额",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "enum": [
                            "code",
                            "coupon"
                        ],
                        "type": "string",
                        "description": "类型 code 激活码 coupon 购物券",
                        "name": "ty",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "说明",
                        "name": "info",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/global.RespModel"
                        }
                    }
                }
            }
        },
        "/users/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "用户详情",
                "operationId": "users.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "更新用户",
                "operationId": "users.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "maxLength": 200,
                        "type": "string",
                        "description": "姓名",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData"
                    },
                    {
                        "type": "mobile",
                        "description": "手机号",
                        "name": "mobile",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "淘宝账号",
                        "name": "taobao",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行卡号",
                        "name": "bank",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行支行名称",
                        "name": "subbank",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "银行名称",
                        "name": "bankname",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "支付宝账号",
                        "name": "alipay",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "微信账号",
                        "name": "wx",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "云支付",
                        "name": "cloudpay",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "上级",
                        "name": "parent",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            -1,
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 -1 封号 0 未激活 1 激活",
                        "name": "status",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "B 钱包",
                        "name": "b",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "自动购买 天数 4 7",
                        "name": "autoorderday",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "自动购买金额",
                        "name": "autoorderamount",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "users.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "users 用户"
                ],
                "summary": "删除用户",
                "operationId": "users.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/withdraws": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.list",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "提现列表",
                "operationId": "withdraws.list",
                "parameters": [
                    {
                        "minimum": 0,
                        "type": "integer",
                        "description": "间隔",
                        "name": "skip",
                        "in": "query"
                    },
                    {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer",
                        "default": 20,
                        "description": "条数",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "排序",
                        "name": "sort",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "过滤条件",
                        "name": "filters",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Withdraw"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.create",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "创建提现",
                "operationId": "withdraws.create",
                "parameters": [
                    {
                        "type": "string",
                        "description": "提现类型 amount subsidy xiong",
                        "name": "type",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "目标",
                        "name": "target",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "Amount",
                        "name": "amount",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Withdraw"
                        }
                    }
                }
            }
        },
        "/withdraws/{id}": {
            "get": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.info",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "提现详情",
                "operationId": "withdraws.info",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "请求字段",
                        "name": "fields",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Withdraw"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.update",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "更新提现",
                "operationId": "withdraws.update",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "提现类型 amount subsidy xiong",
                        "name": "type",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "目标",
                        "name": "target",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "description": "Amount",
                        "name": "amount",
                        "in": "formData"
                    },
                    {
                        "enum": [
                            -1,
                            0,
                            1
                        ],
                        "type": "integer",
                        "description": "状态 -1 拒绝 0 未完成 1 已完成",
                        "name": "status",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Withdraw"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "ApiKey": []
                    },
                    {
                        "AppUser": []
                    }
                ],
                "description": "withdraws.delete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "tags": [
                    "withdraws 提现"
                ],
                "summary": "删除提现",
                "operationId": "withdraws.delete",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "global.RespModel": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "type": "object"
                },
                "msgid": {
                    "type": "string"
                },
                "ts": {
                    "type": "integer"
                }
            }
        },
        "globals.UserGlobal": {
            "type": "object",
            "properties": {
                "activity": {
                    "description": "激活数",
                    "type": "integer"
                },
                "curr": {
                    "description": "今日交易金额",
                    "type": "integer"
                },
                "dayactivity": {
                    "description": "今日激活数",
                    "type": "integer"
                },
                "match": {
                    "description": "匹配单数",
                    "type": "integer"
                },
                "start": {
                    "description": "启动时间",
                    "type": "integer"
                },
                "users": {
                    "description": "总会员数",
                    "type": "integer"
                },
                "withdraw": {
                    "description": "今日提现总额",
                    "type": "integer"
                }
            }
        },
        "managers.MatchResult": {
            "type": "object",
            "properties": {
                "buy_all_amount": {
                    "description": "买单总价值",
                    "type": "integer"
                },
                "buy_all_num": {
                    "description": "买单总数量",
                    "type": "integer"
                },
                "match_amount": {
                    "description": "匹配总价值",
                    "type": "integer"
                },
                "match_num": {
                    "description": "匹配数量",
                    "type": "integer"
                }
            }
        },
        "models.Area": {
            "type": "object",
            "properties": {
                "areaid": {
                    "type": "string"
                },
                "bonus": {
                    "description": "奖金设置 key 天数 v 奖励比例x10000",
                    "type": "object",
                    "$ref": "#/definitions/models.INTM"
                },
                "cache": {
                    "description": "缓冲释放比例 x10000",
                    "type": "integer"
                },
                "concurrent": {
                    "description": "同时交易单数",
                    "type": "integer"
                },
                "couponno": {
                    "description": "每1000消耗购物券数",
                    "type": "integer"
                },
                "craterange": {
                    "description": "排单金额范围",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "create": {
                    "description": "创建订单时间",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "day": {
                    "description": "当天最多买单数",
                    "type": "integer"
                },
                "dayamount": {
                    "description": "当天最多买总额",
                    "type": "integer"
                },
                "frozen": {
                    "description": "冻结期(s)",
                    "type": "integer"
                },
                "interest": {
                    "description": "利息比例 x10000",
                    "type": "integer"
                },
                "last": {
                    "description": "上单比例 x10000",
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "pre": {
                    "description": "预付款比例x10000",
                    "type": "integer"
                },
                "status": {
                    "description": "状态 0 关闭 1 启用",
                    "type": "integer",
                    "enum": [
                        0,
                        1
                    ]
                },
                "userinterval": {
                    "description": "用户每单间隔(s)",
                    "type": "integer"
                }
            }
        },
        "models.Commodity": {
            "type": "object",
            "properties": {
                "category": {
                    "description": "类目",
                    "type": "string"
                },
                "commodityid": {
                    "type": "string"
                },
                "info": {
                    "description": "简介",
                    "type": "string"
                },
                "name": {
                    "description": "名称",
                    "type": "string"
                },
                "price": {
                    "description": "价格",
                    "type": "integer"
                }
            }
        },
        "models.FeedBack": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "User Account",
                    "type": "string"
                },
                "category": {
                    "description": "类目",
                    "type": "string"
                },
                "feedbackid": {
                    "type": "string"
                },
                "images": {
                    "description": "图片",
                    "type": "string"
                },
                "info": {
                    "description": "内容",
                    "type": "string"
                },
                "rootid": {
                    "description": "根",
                    "type": "string"
                },
                "status": {
                    "description": "状态 0 未回复 1 已回复",
                    "type": "integer",
                    "enum": [
                        0,
                        1
                    ]
                },
                "title": {
                    "description": "标题",
                    "type": "string"
                },
                "userid": {
                    "description": "User",
                    "type": "string"
                }
            }
        },
        "models.Holiday": {
            "type": "object",
            "properties": {
                "date": {
                    "description": "日期时间戳",
                    "type": "integer"
                },
                "holidayid": {
                    "type": "string"
                },
                "name": {
                    "description": "名称",
                    "type": "string"
                }
            }
        },
        "models.INTM": {
            "type": "object",
            "additionalProperties": {}
        },
        "models.Manager": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "账号",
                    "type": "string"
                },
                "managerid": {
                    "type": "string"
                },
                "name": {
                    "description": "名称",
                    "type": "string"
                },
                "password": {
                    "description": "密码",
                    "type": "string"
                },
                "permission": {
                    "description": "权限 ,分割",
                    "type": "string"
                },
                "status": {
                    "description": "状态 0 未激活 1 激活",
                    "type": "integer"
                }
            }
        },
        "models.MoneyRecord": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "User Account",
                    "type": "string"
                },
                "action": {
                    "description": "动作 recharge 充值 trans 转移 use 使用 income 收入 punish 惩罚 reward 奖励\namount:recharge 会员管理-金币赠送\ncode:trans,use 激活码管理-PIN管理\ncoupon:trans,use 排单码管理-PIN管理",
                    "type": "string"
                },
                "areaid": {
                    "description": "区域",
                    "type": "string"
                },
                "balance": {
                    "description": "当前用户余额",
                    "type": "integer"
                },
                "info": {
                    "description": "说明",
                    "type": "string"
                },
                "moneyrecordid": {
                    "type": "string"
                },
                "num": {
                    "description": "数量",
                    "type": "integer"
                },
                "sourceorder": {
                    "description": "来源订单",
                    "type": "string"
                },
                "target": {
                    "description": "目标用户",
                    "type": "string"
                },
                "targetaccount": {
                    "description": "目标用户名称",
                    "type": "string"
                },
                "tbalance": {
                    "description": "目标用户余额",
                    "type": "integer"
                },
                "type": {
                    "description": "类型 amount subsidy code coupon xiong cache",
                    "type": "string"
                },
                "userid": {
                    "description": "操作用户",
                    "type": "string"
                }
            }
        },
        "models.News": {
            "type": "object",
            "properties": {
                "info": {
                    "description": "内容",
                    "type": "string"
                },
                "newsid": {
                    "type": "string"
                },
                "title": {
                    "description": "标题",
                    "type": "string"
                }
            }
        },
        "models.Order": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "User Account",
                    "type": "string"
                },
                "amount": {
                    "description": "金额",
                    "type": "integer"
                },
                "areaid": {
                    "description": "区域",
                    "type": "string"
                },
                "comodity": {
                    "description": "商品",
                    "type": "string"
                },
                "comodityid": {
                    "description": "商品ID",
                    "type": "string"
                },
                "confirmtime": {
                    "description": "确认时间",
                    "type": "integer"
                },
                "frozen": {
                    "description": "冻结期(s)",
                    "type": "integer"
                },
                "interest": {
                    "description": "利息",
                    "type": "integer"
                },
                "matchamount": {
                    "description": "已匹配金额",
                    "type": "integer"
                },
                "matchstatus": {
                    "description": "匹配状态 0 待匹配 1 已匹配",
                    "type": "integer"
                },
                "orderid": {
                    "type": "string"
                },
                "source": {
                    "description": "来源 amount 余额 subsidy 补贴",
                    "type": "string",
                    "enum": [
                        "amount",
                        "subsidy"
                    ]
                },
                "speed": {
                    "description": "速度 true 加速",
                    "type": "boolean"
                },
                "status": {
                    "description": "状态 -1 关闭 0 排队 1 预付 2 尾款 3 冻结 4 完成",
                    "type": "integer"
                },
                "type": {
                    "description": "类型 buy 买 sell 卖",
                    "type": "string",
                    "enum": [
                        "buy",
                        "sell"
                    ]
                },
                "userid": {
                    "description": "操作用户",
                    "type": "string"
                },
                "username": {
                    "description": "用户昵称",
                    "type": "string"
                }
            }
        },
        "models.Range": {
            "type": "object",
            "properties": {
                "base": {
                    "description": "基数",
                    "type": "integer"
                },
                "max": {
                    "type": "integer"
                },
                "min": {
                    "type": "integer"
                }
            }
        },
        "models.Record": {
            "type": "object",
            "properties": {
                "amount": {
                    "description": "金额",
                    "type": "integer"
                },
                "areaid": {
                    "description": "买方区域",
                    "type": "string"
                },
                "buy": {
                    "description": "买方信息",
                    "type": "object",
                    "$ref": "#/definitions/models.SimpleUser"
                },
                "buyid": {
                    "description": "买方ID",
                    "type": "string"
                },
                "buyimage": {
                    "description": "打款图片",
                    "type": "string"
                },
                "buyorder": {
                    "description": "买方订单ID",
                    "type": "string"
                },
                "confirmtime": {
                    "description": "确认时间",
                    "type": "integer"
                },
                "paytime": {
                    "description": "打款时间",
                    "type": "integer"
                },
                "recordid": {
                    "type": "string"
                },
                "report": {
                    "description": "举报",
                    "type": "string"
                },
                "reportimage": {
                    "description": "举报图片",
                    "type": "string"
                },
                "sell": {
                    "description": "卖方信息",
                    "type": "object",
                    "$ref": "#/definitions/models.SimpleUser"
                },
                "sellid": {
                    "description": "卖方ID",
                    "type": "string"
                },
                "sellimage": {
                    "description": "收款图片",
                    "type": "string"
                },
                "sellorder": {
                    "description": "卖方订单ID",
                    "type": "string"
                },
                "status": {
                    "description": "状态 -3 删除 -2 超时未确认 -1 超时未打款 0 待打款 1 待确认 2 已确认",
                    "type": "integer"
                },
                "type": {
                    "description": "类型 pre 预付款 last 尾款",
                    "type": "string"
                }
            }
        },
        "models.SimpleUser": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "账号",
                    "type": "string"
                },
                "alipay": {
                    "description": "支付宝账号",
                    "type": "string"
                },
                "bank": {
                    "description": "银行卡号",
                    "type": "string"
                },
                "bankname": {
                    "description": "银行名称",
                    "type": "string"
                },
                "mobile": {
                    "description": "手机号",
                    "type": "string"
                },
                "name": {
                    "description": "姓名",
                    "type": "string"
                },
                "parent": {
                    "description": "上级",
                    "type": "string"
                },
                "parentid": {
                    "description": "上级ID",
                    "type": "string"
                },
                "parentmobile": {
                    "description": "上级手机",
                    "type": "string"
                },
                "parentname": {
                    "description": "上级姓名",
                    "type": "string"
                },
                "subbank": {
                    "description": "银行支行名称",
                    "type": "string"
                },
                "taobao": {
                    "description": "淘宝账号",
                    "type": "string"
                },
                "wx": {
                    "description": "微信账号",
                    "type": "string"
                }
            }
        },
        "models.SysConfig": {
            "type": "object",
            "properties": {
                "activity": {
                    "description": "每天激活人数限制",
                    "type": "integer"
                },
                "amountwithdrawamount": {
                    "description": "余额提现额度",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "amountwithdrawlimit": {
                    "description": "余额提现时间限制",
                    "type": "boolean"
                },
                "amountwithdrawpoundage": {
                    "description": "余额提现手续费率 x10000",
                    "type": "integer"
                },
                "amountwithdrawpoundagemodelsrange": {
                    "description": "余额提现手续费",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "amountwithdrawtime": {
                    "description": "余额每日提现时间",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "codenum": {
                    "description": "激活账号消耗激活码数",
                    "type": "integer"
                },
                "confirmtime": {
                    "description": "确认超时时间",
                    "type": "integer"
                },
                "datallparent": {
                    "description": "每日所有用户领导金额",
                    "type": "integer"
                },
                "dayall": {
                    "description": "每日所有用户提现数",
                    "type": "integer"
                },
                "dayparent": {
                    "description": "每日每个用户领导金额",
                    "type": "integer"
                },
                "ex_activity": {
                    "description": "激活数基",
                    "type": "integer"
                },
                "ex_day_activity": {
                    "description": "每日激活数基",
                    "type": "integer"
                },
                "ex_day_buy": {
                    "description": "今日预购基",
                    "type": "integer"
                },
                "ex_day_regist": {
                    "description": "每日注册数基",
                    "type": "integer"
                },
                "ex_day_sell": {
                    "description": "今日挂卖基",
                    "type": "integer"
                },
                "ex_regist": {
                    "description": "注册数基",
                    "type": "integer"
                },
                "paytime": {
                    "description": "打款超时时间",
                    "type": "integer"
                },
                "regist": {
                    "description": "每日注册时间 base 为每日注册人数",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "registing": {
                    "description": "注册中",
                    "type": "boolean"
                },
                "run": {
                    "description": "每日运行时间",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "running": {
                    "description": "运行中",
                    "type": "boolean"
                },
                "start": {
                    "description": "系统运行开始时间",
                    "type": "integer"
                },
                "subsidywithdrawamount": {
                    "description": "补贴提现额度",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "subsidywithdrawlimit": {
                    "description": "补贴提现时间限制",
                    "type": "boolean"
                },
                "subsidywithdrawpoundage": {
                    "description": "补贴提现手续费率 x10000",
                    "type": "integer"
                },
                "subsidywithdrawpoundagemodelsrange": {
                    "description": "补贴提现手续费",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "subsidywithdrawtime": {
                    "description": "补贴每日提现时间",
                    "type": "object",
                    "$ref": "#/definitions/models.Range"
                },
                "sysconfigid": {
                    "type": "string"
                },
                "tip": {
                    "description": "登录失败提示语",
                    "type": "string"
                },
                "withdrawday": {
                    "description": "每日每个用户提现单数",
                    "type": "integer"
                }
            }
        },
        "models.User": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "账号",
                    "type": "string"
                },
                "alipay": {
                    "description": "支付宝账号",
                    "type": "string"
                },
                "amount": {
                    "description": "余额",
                    "type": "integer"
                },
                "autoorderamount": {
                    "description": "自动购买金额",
                    "type": "integer"
                },
                "autoorderday": {
                    "description": "自动购买 天数 4 7",
                    "type": "integer"
                },
                "b": {
                    "description": "B 钱包",
                    "type": "integer"
                },
                "bank": {
                    "description": "银行卡号",
                    "type": "string"
                },
                "bankname": {
                    "description": "银行名称",
                    "type": "string"
                },
                "cache": {
                    "description": "缓冲",
                    "type": "integer"
                },
                "cloudpay": {
                    "description": "云支付",
                    "type": "string"
                },
                "codeno": {
                    "description": "激活码",
                    "type": "integer"
                },
                "couponno": {
                    "description": "购物券",
                    "type": "integer"
                },
                "currnum": {
                    "description": "当前交易数",
                    "type": "integer"
                },
                "frozen": {
                    "description": "冻结金额",
                    "type": "integer"
                },
                "lastautoorder": {
                    "description": "上次托管购买日期",
                    "type": "integer"
                },
                "lastbuyamount": {
                    "description": "上次买入金额",
                    "type": "integer"
                },
                "lastwithdrawamount": {
                    "description": "上次卖出金额",
                    "type": "integer"
                },
                "message": {
                    "description": "被封原因",
                    "type": "string"
                },
                "mobile": {
                    "description": "手机号",
                    "type": "string"
                },
                "name": {
                    "description": "姓名",
                    "type": "string"
                },
                "parent": {
                    "description": "上级",
                    "type": "string"
                },
                "parenthosting": {
                    "description": "上级托管",
                    "type": "boolean"
                },
                "parentid": {
                    "description": "上级ID",
                    "type": "string"
                },
                "parentmobile": {
                    "description": "上级手机",
                    "type": "string"
                },
                "parentname": {
                    "description": "上级姓名",
                    "type": "string"
                },
                "sellnum": {
                    "description": "剩余卖单次数",
                    "type": "integer"
                },
                "status": {
                    "description": "状态 -1 封号 0 未激活 1 激活",
                    "type": "integer",
                    "enum": [
                        -1,
                        0,
                        1
                    ]
                },
                "sub": {
                    "description": "下级数量",
                    "type": "integer"
                },
                "subactivity": {
                    "description": "激活的下级数量",
                    "type": "integer"
                },
                "subbank": {
                    "description": "银行支行名称",
                    "type": "string"
                },
                "subsidy": {
                    "description": "补贴",
                    "type": "integer"
                },
                "subtotalbonus": {
                    "description": "接受的下级奖金数量",
                    "type": "integer"
                },
                "taobao": {
                    "description": "淘宝账号",
                    "type": "string"
                },
                "totalamount": {
                    "description": "交易排单总额",
                    "type": "integer"
                },
                "userid": {
                    "type": "string"
                },
                "wx": {
                    "description": "微信账号",
                    "type": "string"
                },
                "xiong": {
                    "description": "小熊宝",
                    "type": "integer"
                }
            }
        },
        "models.Withdraw": {
            "type": "object",
            "properties": {
                "account": {
                    "description": "User Account",
                    "type": "string"
                },
                "amount": {
                    "description": "Amount",
                    "type": "integer"
                },
                "balance": {
                    "description": "余额",
                    "type": "integer"
                },
                "status": {
                    "description": "状态 -1 拒绝 0 未完成 1 已完成",
                    "type": "integer",
                    "enum": [
                        -1,
                        0,
                        1
                    ]
                },
                "target": {
                    "description": "目标",
                    "type": "string"
                },
                "type": {
                    "description": "提现类型 amount subsidy xiong",
                    "type": "string"
                },
                "userid": {
                    "description": "User",
                    "type": "string"
                },
                "withdrawid": {
                    "type": "string"
                }
            }
        },
        "orders.ListResp": {
            "type": "object",
            "properties": {
                "global_curr": {
                    "description": "今日交易金额",
                    "type": "integer"
                },
                "global_success": {
                    "description": "交易成功总额",
                    "type": "integer"
                },
                "global_total": {
                    "description": "总额",
                    "type": "integer"
                },
                "global_transaction": {
                    "description": "交易中总额",
                    "type": "integer"
                },
                "list": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Order"
                    }
                },
                "total": {
                    "description": "总条数",
                    "type": "integer"
                },
                "total_amount": {
                    "description": "总金额",
                    "type": "integer"
                }
            }
        },
        "records.ListResp": {
            "type": "object",
            "properties": {
                "confirmnum": {
                    "description": "收款数",
                    "type": "integer"
                },
                "list": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Record"
                    }
                },
                "paynum": {
                    "description": "打款数",
                    "type": "integer"
                },
                "total": {
                    "description": "总条数",
                    "type": "integer"
                },
                "total_amount": {
                    "description": "总金额",
                    "type": "integer"
                }
            }
        },
        "users.ListResp": {
            "type": "object",
            "properties": {
                "activity": {
                    "description": "今日激活",
                    "type": "integer"
                },
                "amount": {
                    "description": "余额总额",
                    "type": "integer"
                },
                "cache": {
                    "description": "缓冲总额",
                    "type": "integer"
                },
                "list": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.User"
                    }
                },
                "regist": {
                    "description": "今日注册",
                    "type": "integer"
                },
                "subsidy": {
                    "description": "补贴总额",
                    "type": "integer"
                },
                "total": {
                    "type": "integer"
                },
                "xiong": {
                    "description": "🐻总额",
                    "type": "integer"
                }
            }
        }
    },
    "securityDefinitions": {
        "ApiKey": {
            "type": "apiKey",
            "name": "X-Apikey",
            "in": "header"
        },
        "AppKey": {
            "type": "apiKey",
            "name": "X-Appkey",
            "in": "header"
        },
        "AppUser": {
            "type": "apiKey",
            "name": "appuser",
            "in": "query"
        }
    }
}

console.log(detailedDiff(a, b))