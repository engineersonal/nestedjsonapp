// import flatten from "flat"

const flatten = require('flat');
const employees = {
    "id": "55853818F18348179A64B14EC7CBAE6B",
    "internalId": "10000020596",
    "templates": [
        {
            "templateId": "B4959AA5292B4765BC45D80DDBB9EA28",
            "internalId": "HEC3_LAN_CDD",
            "attributeGroups": [
                {
                    "attributeGroupId": "57FEFC3164334F45B46419A9D33C304B",
                    "referenceId": "996da449514b63716cbdf28bac3ed644",
                    "internalId": "HEC3_LAN_CDD",
                    "attributes": [
                        {
                            "attributeId": "8E994D162FB443FD810F4189254774D0",
                            "referenceID": "11cb94ca6d017864db61d22f4992aba5",
                            "internalId": "HE3_CDD_REQUESTED_DATE",
                            "dataType": "DATE",
                            "value1": "2023-04-12",
                            "value2": null,
                            "defaultValue1": "2023-04-12",
                            "name": "HE3_CDD_REQUESTED_DATE"
                        },
                        {
                            "attributeId": "967474F1F537416E92DFC82B38458614",
                            "referenceID": "9ad2972ace20dfaa18095b943d6b10c6",
                            "internalId": "HE3_CDD_ACCEPTED",
                            "dataType": "STRING",
                            "value1": "X",
                            "value2": null,
                            "defaultValue1": "X",
                            "name": "HE3_CDD_ACCEPTED"
                        },
                        {
                            "attributeId": "A573552B73414564899C91AF4AF44FCC",
                            "referenceID": "4257ce32ca230c1ad6a84aedfde5a548",
                            "internalId": "HE3_CDD_PROPOSED_DATE",
                            "dataType": "DATE",
                            "value1": "2022-04-12",
                            "value2": null,
                            "defaultValue1": "2022-04-12",
                            "name": "HE3_CDD_PROPOSED_DATE"
                        },
                        {
                            "attributeId": "B5C88B2CDDE44C4793417163029F6B78",
                            "referenceID": "38f5fef2ce804cb7b8856c9ff0bd616c",
                            "internalId": "HE3_CDD_EXPIRATION_DATE",
                            "dataType": "DATE",
                            "value1": "2022-04-11",
                            "value2": null,
                            "defaultValue1": "2022-04-11",
                            "name": "HE3_CDD_EXPIRATION_DATE"
                        },
                        {
                            "attributeId": "F1F3195C159B4AA898A4563401C354A1",
                            "referenceID": "c3458c57ccc4b89410e9aaf3da30f364",
                            "internalId": "HE3_CDD_BUILD_START_DATE",
                            "dataType": "DATE",
                            "value1": "2022-04-12",
                            "value2": null,
                            "defaultValue1": "2022-04-12",
                            "name": "HE3_CDD_BUILD_START_DATE"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "BD70D5ADC751417297B6720B4CECFDD0",
            "internalId": "HEC3_LAN_HEADER",
            "attributeGroups": [
                {
                    "attributeGroupId": "4989FE5D48A849A28E62C70E3A65E31C",
                    "referenceId": "4306b0af1c454115c6e1f4338b0648fc",
                    "internalId": "HEC3_LAN_HEADER",
                    "attributes": [
                        {
                            "attributeId": "7856790512FE4BFD901E504361C99D03",
                            "referenceID": "c125af7d3ebcc9e6c8a7952d61434048",
                            "internalId": "HE3_CONFIG_STATUS",
                            "dataType": "STRING",
                            "value1": "01",
                            "value2": null,
                            "defaultValue1": "01",
                            "name": "HE3_CONFIG_STATUS"
                        },
                        {
                            "attributeId": "89D73CB542674BEE9D5ECCCF35015286",
                            "referenceID": "a5966052663ae2993ac5ffac9136c60b",
                            "internalId": "HE3_CONF_VERSION_DESCR",
                            "dataType": "STRING",
                            "value1": "V1",
                            "value2": null,
                            "defaultValue1": "V1",
                            "name": "HE3_CONF_VERSION_DESCR"
                        },
                        {
                            "attributeId": "8B0AE12603ED4AC8925785B8F75D93A8",
                            "referenceID": "ea63efe6ba647b6cad4daa1c7f848934",
                            "internalId": "HE3_CONF_VERSION",
                            "dataType": "STRING",
                            "value1": "000001",
                            "value2": null,
                            "defaultValue1": "000001",
                            "name": "HE3_CONF_VERSION"
                        },
                        {
                            "attributeId": "BD7EBF68D70B4213AF4772B8CFA39C07",
                            "referenceID": "584773f3e94c19a85287864fe4f52fc4",
                            "internalId": "HE3_CONF_DESCR",
                            "dataType": "STRING",
                            "value1": "GY NA",
                            "value2": null,
                            "defaultValue1": "GY NA",
                            "name": "HE3_CONF_DESCR"
                        },
                        {
                            "attributeId": "D0B9FBED989F421C9D1955C5BFD6D620",
                            "referenceID": "0e13587ed41cc77ba1cbc5c0e49a0156",
                            "internalId": "HE3_CONFID",
                            "dataType": "STRING",
                            "value1": "000000003087",
                            "value2": null,
                            "defaultValue1": "000000003087",
                            "name": "HE3_CONFID"
                        },
                        {
                            "attributeId": "F405C849BB7B44169A1E80523AC257D4",
                            "referenceID": "bb5e4d166af9ba95d1bf9d1fda42a229",
                            "internalId": "HE3_BUSINESSPARTNER",
                            "dataType": "STRING",
                            "value1": "0000628188",
                            "value2": null,
                            "defaultValue1": "0000628188",
                            "name": "HE3_BUSINESSPARTNER"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "F55322B36DE54B32A29E64EB50ACD070",
            "internalId": "HEC3_LAN_PHASE",
            "attributeGroups": [],
            "nestedStructures": []
        },
        {
            "templateId": "CFBF8E587929470D93B1EAAFA5F91302",
            "internalId": "HEC3_LAN_REF",
            "attributeGroups": [
                {
                    "attributeGroupId": "60C5478926064EBAAA23BDD1ABFD40FF",
                    "referenceId": "50a94f208f9733953276e4f1987a1117",
                    "internalId": "HEC3_LAN_REF",
                    "attributes": [
                        {
                            "attributeId": "0CE10B203E264C37A1F3B071A255109E",
                            "referenceID": "616ab832063b2ca6f1531e38cc618530",
                            "internalId": "HE3_MATERIAL_OPMODE_DESCR",
                            "dataType": "STRING",
                            "value1": "Production",
                            "value2": null,
                            "defaultValue1": "Production",
                            "name": "HE3_MATERIAL_OPMODE_DESCR"
                        },
                        {
                            "attributeId": "5ECB84616D7B47ED98E86CF83A73FCB3",
                            "referenceID": "edef33c249836211afdf3488e560140f",
                            "internalId": "HE3_MATERIAL",
                            "dataType": "STRING",
                            "value1": "000000000008008464",
                            "value2": null,
                            "defaultValue1": "000000000008008464",
                            "name": "HE3_MATERIAL"
                        },
                        {
                            "attributeId": "611829A588A447A39A651A5077E6E64C",
                            "referenceID": "b251c9b7386936eabd1f4eab4c6bff28",
                            "internalId": "HE3_MAT_SRVC_MODE_DESCR",
                            "dataType": "STRING",
                            "value1": "Advanced Edition",
                            "value2": null,
                            "defaultValue1": "Advanced Edition",
                            "name": "HE3_MAT_SRVC_MODE_DESCR"
                        },
                        {
                            "attributeId": "66E28A3ED210456181447A2F101497BE",
                            "referenceID": "c1f82a9f65476abd565f5f33480ecb7a",
                            "internalId": "HE3_MATERIAL_LICMODE_DESCR",
                            "dataType": "STRING",
                            "value1": "Subscription",
                            "value2": null,
                            "defaultValue1": "Subscription",
                            "name": "HE3_MATERIAL_LICMODE_DESCR"
                        },
                        {
                            "attributeId": "997CBF24B11349C9A60A8E45144A1BC5",
                            "referenceID": "2a5dce06dcf167ec13a5b4e66284098d",
                            "internalId": "HE3_MATERIAL_DESCR",
                            "dataType": "STRING",
                            "value1": "HEC Production Subscription Ad",
                            "value2": null,
                            "defaultValue1": "HEC Production Subscription Ad",
                            "name": "HE3_MATERIAL_DESCR"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "D6A10463150D4F21B2AD93A84C1C9E2D",
            "internalId": "HEC3_LAN_CONTRD",
            "attributeGroups": [
                {
                    "attributeGroupId": "1FFE9FB8595D4EA7ABACA97B0B34C661",
                    "referenceId": "750c2fa266dff1856cd8b4cc3e162f3d",
                    "internalId": "HEC3_LAN_CONTRD",
                    "attributes": [
                        {
                            "attributeId": "31EFA26F944C4220BCF95F717771A939",
                            "referenceID": "3c84a974840f9809dbf73ddedb65f5af",
                            "internalId": "HE3_SALES_ORDER",
                            "dataType": "STRING",
                            "value1": "0236000004",
                            "value2": null,
                            "defaultValue1": "0236000004",
                            "name": "HE3_SALES_ORDER"
                        },
                        {
                            "attributeId": "39A54DFDC1CA426E8A01805F3EBBCCA6",
                            "referenceID": "378d14c7ad3b6587fd8a0b80c8ed7ec6",
                            "internalId": "HE3_LS_CPQ_QUOTE_NUMBER",
                            "dataType": "STRING",
                            "value1": "007590000014",
                            "value2": null,
                            "defaultValue1": "007590000014",
                            "name": "HE3_LS_CPQ_QUOTE_NUMBER"
                        },
                        {
                            "attributeId": "645A173A9181406BA81CA415468D1477",
                            "referenceID": "6b05e042c98b9faab516bc3c4f4eaf06",
                            "internalId": "HE3_LANDSCAPE_CONFIG_STATUS",
                            "dataType": "STRING",
                            "value1": "04",
                            "value2": null,
                            "defaultValue1": "04",
                            "name": "HE3_LANDSCAPE_CONFIG_STATUS"
                        },
                        {
                            "attributeId": "747226DE26C84FBFBD74535BEDE2F072",
                            "referenceID": "0298872613798075c331ae027a273654",
                            "internalId": "HE3_LS_OPPORTUNITY_ID",
                            "dataType": "STRING",
                            "value1": "304385872",
                            "value2": null,
                            "defaultValue1": "304385872",
                            "name": "HE3_LS_OPPORTUNITY_ID"
                        },
                        {
                            "attributeId": "9AD9A8EAA4AD49F5BC9E7FC9568102B1",
                            "referenceID": "695b039d2b536c8dc675ac810a388b91",
                            "internalId": "HE3_LS_CMS_CASE_ID",
                            "dataType": "STRING",
                            "value1": "003062003936",
                            "value2": null,
                            "defaultValue1": "003062003936",
                            "name": "HE3_LS_CMS_CASE_ID"
                        },
                        {
                            "attributeId": "A73B8AAFE1EB49FBA2BAA26DC0625D87",
                            "referenceID": "3f0aa5c41431fa0d53ebe5b1bdc52cd2",
                            "internalId": "HE3_LS_PLANNED_SIGN_DATE",
                            "dataType": "DATE",
                            "value1": "2023-04-11",
                            "value2": null,
                            "defaultValue1": "2023-04-11",
                            "name": "HE3_LS_PLANNED_SIGN_DATE"
                        },
                        {
                            "attributeId": "B06B303D78F14DB28194A87DC7090AC3",
                            "referenceID": "7239bca271a534811dadcca40be20dd8",
                            "internalId": "HE3_QUOTE",
                            "dataType": "STRING",
                            "value1": "8000008583",
                            "value2": null,
                            "defaultValue1": "8000008583",
                            "name": "HE3_QUOTE"
                        },
                        {
                            "attributeId": "BD47954B425B45FA8AE7B1C42C87934D",
                            "referenceID": "329a58ea1e95ccc66e9001b802efa9c4",
                            "internalId": "HE3_ACCCESS_DLVY_CAT_DESCR",
                            "dataType": "STRING",
                            "value1": "Default",
                            "value2": null,
                            "defaultValue1": "Default",
                            "name": "HE3_ACCCESS_DLVY_CAT_DESCR"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "9D941CB573CF481EB6D3ABC2F8B199CF",
            "internalId": "HEC3_LAN_GENERAL",
            "attributeGroups": [
                {
                    "attributeGroupId": "942CE7DF1731406BAC646F6EABAC8A4F",
                    "referenceId": "9b1986f2e155fbd38df9c7230558fc03",
                    "internalId": "HEC3_LAN_GENERAL",
                    "attributes": [
                        {
                            "attributeId": "1674E7E74676473A874E61C1E2BC7EF3",
                            "referenceID": "f42b04b0a206dbccf8872ac3c4880636",
                            "internalId": "HE3_LS_AMOUNT_TINSTALL",
                            "dataType": "NUMERIC",
                            "value1": "1 ",
                            "value2": null,
                            "defaultValue1": "1 ",
                            "name": "HE3_LS_AMOUNT_TINSTALL"
                        },
                        {
                            "attributeId": "1DD53C9F10694F25AFF7BCC13AB4B163",
                            "referenceID": "aff3479bf13c0481e51d47caea666b94",
                            "internalId": "HE3_LS_CINSTALL_NUM",
                            "dataType": "STRING",
                            "value1": "0090123750",
                            "value2": null,
                            "defaultValue1": "0090123750",
                            "name": "HE3_LS_CINSTALL_NUM"
                        },
                        {
                            "attributeId": "285E2CB30D614925BADDA0DAE0E37F5B",
                            "referenceID": "708b9e0ad64f6114424cc27186204df3",
                            "internalId": "HE3_SYSTEM_TIMEZONE",
                            "dataType": "STRING",
                            "value1": "UTC-5",
                            "value2": null,
                            "defaultValue1": "UTC-5",
                            "name": "HE3_SYSTEM_TIMEZONE"
                        },
                        {
                            "attributeId": "377F89D0C7994F15B1E2A678BBB5EEC8",
                            "referenceID": "8927fd750940c9f8319603e31e42d571",
                            "internalId": "HE3_LS_SISM_BP_ID",
                            "dataType": "STRING",
                            "value1": "0000012830",
                            "value2": null,
                            "defaultValue1": "0000012830",
                            "name": "HE3_LS_SISM_BP_ID"
                        },
                        {
                            "attributeId": "38E27E4E1F004C0F8580E9BDF09F1297",
                            "referenceID": "f8377ff91957082454f25b111f0f2ee2",
                            "internalId": "HE3_DOCUMENT_REPOSITORY",
                            "dataType": "STRING",
                            "value1": "https://sap-my.sharepoint.com/",
                            "value2": null,
                            "defaultValue1": "https://sap-my.sharepoint.com/",
                            "name": "HE3_DOCUMENT_REPOSITORY"
                        },
                        {
                            "attributeId": "4B5FD74629D54977B20470A011FD9678",
                            "referenceID": "89b6e27d8aff0211d4b6d50b5b5977d6",
                            "internalId": "HE3_LS_TINSTALL_NUM",
                            "dataType": "STRING",
                            "value1": "0021111369",
                            "value2": null,
                            "defaultValue1": "0021111369",
                            "name": "HE3_LS_TINSTALL_NUM"
                        },
                        {
                            "attributeId": "90DC3C9FFE1B43CF8FF0C15CFB9D66E4",
                            "referenceID": "1664ae4a5bcb8c861d505ae1923cc673",
                            "internalId": "HE3_LS_CUSTOMER_ID",
                            "dataType": "STRING",
                            "value1": "GYR",
                            "value2": null,
                            "defaultValue1": "GYR",
                            "name": "HE3_LS_CUSTOMER_ID"
                        },
                        {
                            "attributeId": "97070D93FC5F43CA86BDAD55A28D99FA",
                            "referenceID": "aa759526df705a3c3066aaa06a664183",
                            "internalId": "HE3_SUPPORT_TIMEZONE",
                            "dataType": "STRING",
                            "value1": "EST",
                            "value2": null,
                            "defaultValue1": "EST",
                            "name": "HE3_SUPPORT_TIMEZONE"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "D61B544721FE48FC81D99C74044A5635",
            "internalId": "HEC3_LAN_KEY",
            "attributeGroups": [
                {
                    "attributeGroupId": "B3188F37899847AFAA56A8084D2DD1ED",
                    "referenceId": "b88f53449353af660825d72d306f8d1c",
                    "internalId": "HEC3_LAN_KEY",
                    "attributes": [
                        {
                            "attributeId": "D9CD7E1FA50E48168C47BCA81BC47CEE",
                            "referenceID": "8dd27130159ac0be02dccf418f35c0b0",
                            "internalId": "HE3_NODE_LANDSCAPE",
                            "dataType": "STRING",
                            "value1": "k8C3Rk1O7joSsZQU7hx4IW",
                            "value2": null,
                            "defaultValue1": "k8C3Rk1O7joSsZQU7hx4IW",
                            "name": "HE3_NODE_LANDSCAPE"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "88CDD5402E2B46D48CB74DB40E966D1D",
            "internalId": "HEC3_LAN_STATUS",
            "attributeGroups": [
                {
                    "attributeGroupId": "E0DEE8B157524E85B36F5BF06854EFB0",
                    "referenceId": "33c0eafef3100dd328da442096dec215",
                    "internalId": "HEC3_LAN_STATUS",
                    "attributes": [
                        {
                            "attributeId": "2F99064E96A54C748DAF8D00DF223D97",
                            "referenceID": "a01eba8f6a546d10319f0d717d2c5e5f",
                            "internalId": "HE3_CDD_STATUS",
                            "dataType": "STRING",
                            "value1": "03",
                            "value2": null,
                            "defaultValue1": "03",
                            "name": "HE3_CDD_STATUS"
                        },
                        {
                            "attributeId": "775AB252A4ED41BCBA8DAB59069C9E4D",
                            "referenceID": "11e40fc08bb5f75c53933342863aaf83",
                            "internalId": "HE3_IS_BASELINE",
                            "dataType": "STRING",
                            "value1": "X",
                            "value2": null,
                            "defaultValue1": "X",
                            "name": "HE3_IS_BASELINE"
                        },
                        {
                            "attributeId": "9E18A2D238BC423EA6B0B1936BCFA590",
                            "referenceID": "fb2927a1978a49ac1a07eb91f3d21380",
                            "internalId": "HE3_IS_BASELINE_ACTIVE",
                            "dataType": "STRING",
                            "value1": "X",
                            "value2": null,
                            "defaultValue1": "X",
                            "name": "HE3_IS_BASELINE_ACTIVE"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "BA1EA6494AF94D8EA06F76C2AAB47221",
            "internalId": "HEC3_LAN_CONFDES",
            "attributeGroups": [
                {
                    "attributeGroupId": "BD2456ECBB1640D89A739646D8E45061",
                    "referenceId": "651304c84cafba22b702203e56f994eb",
                    "internalId": "HEC3_LAN_CONFDES",
                    "attributes": [
                        {
                            "attributeId": "72F85945C3A04A34AE0E07B270FFE653",
                            "referenceID": "6f71abbc654daa76aec7f41369828799",
                            "internalId": "HE3_LANDSCAPE_DESCR",
                            "dataType": "STRING",
                            "value1": "GY NA",
                            "value2": null,
                            "defaultValue1": "GY NA",
                            "name": "HE3_LANDSCAPE_DESCR"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "896457B24C9341B5BBD8BF888DA71567",
            "internalId": "HEC3_LAN_CONTRB",
            "attributeGroups": [
                {
                    "attributeGroupId": "BCF97C81AC22498A9B5A76074467097C",
                    "referenceId": "a974189e454f04b28eec79e5c41b09cc",
                    "internalId": "HEC3_LAN_CONTRB",
                    "attributes": [
                        {
                            "attributeId": "0FAC9437C0F549A4A8B959E31076C499",
                            "referenceID": "ae0c11581b7dde187123a99ee38c1659",
                            "internalId": "HE3_FM_DR_OPERATION_DESCR",
                            "dataType": "STRING",
                            "value1": "DR Operation",
                            "value2": null,
                            "defaultValue1": "DR Operation",
                            "name": "HE3_FM_DR_OPERATION_DESCR"
                        },
                        {
                            "attributeId": "1454753117464E31B0DA9C1D0434BBF8",
                            "referenceID": "f33a86f635c2eaaa8f7f376af411976b",
                            "internalId": "HE3_CONTRACT_END_DATE",
                            "dataType": "DATE",
                            "value1": "2026-12-31",
                            "value2": null,
                            "defaultValue1": "2026-12-31",
                            "name": "HE3_CONTRACT_END_DATE"
                        },
                        {
                            "attributeId": "664FD045DCF1486D9B0618E8D95C1674",
                            "referenceID": "d146232885b655d7b17adef2fb520629",
                            "internalId": "HE3_LS_UPLIFT_PERCENT",
                            "dataType": "NUMERICFLEXIBLE",
                            "value1": "9 ",
                            "value2": null,
                            "defaultValue1": "9 ",
                            "name": "HE3_LS_UPLIFT_PERCENT"
                        },
                        {
                            "attributeId": "71204507979546FCB8D3E4890E03EC78",
                            "referenceID": "1f2ffbae624840a65924434cc2105654",
                            "internalId": "HE3_LS_CONTRACT_DUR_UNIT_DESCR",
                            "dataType": "STRING",
                            "value1": "Months",
                            "value2": null,
                            "defaultValue1": "Months",
                            "name": "HE3_LS_CONTRACT_DUR_UNIT_DESCR"
                        },
                        {
                            "attributeId": "9C61D1376EDC4382827AAFE3F7CEA0C8",
                            "referenceID": "b479abb8a75c93c15b7f856690633b28",
                            "internalId": "HE3_CONTRACT_START_DATE",
                            "dataType": "DATE",
                            "value1": "2022-01-01",
                            "value2": null,
                            "defaultValue1": "2022-01-01",
                            "name": "HE3_CONTRACT_START_DATE"
                        },
                        {
                            "attributeId": "CD6570C55A39429B9DE4E23A6C0C120B",
                            "referenceID": "49486d4dadf6921884ed12994b4ff157",
                            "internalId": "HE3_LS_CONTRACT_CURR",
                            "dataType": "STRING",
                            "value1": "EUR",
                            "value2": null,
                            "defaultValue1": "EUR",
                            "name": "HE3_LS_CONTRACT_CURR"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "794D08763F62403E8F309ECFED835F1C",
            "internalId": "HEC3_LAN_DETAIL",
            "attributeGroups": [
                {
                    "attributeGroupId": "E042D3C74EBB423FB82735637708CD27",
                    "referenceId": "93af0604d1a896004ad2dbe7299c58cf",
                    "internalId": "HEC3_LAN_DETAIL",
                    "attributes": [
                        {
                            "attributeId": "800CA42E18E448A68BE364D5DFA376A8",
                            "referenceID": "62e8289aab5fd3dee4471f851a9e7721",
                            "internalId": "HE3_LANDSCAPE_OWNER",
                            "dataType": "STRING",
                            "value1": "0000628188",
                            "value2": null,
                            "defaultValue1": "0000628188",
                            "name": "HE3_LANDSCAPE_OWNER"
                        },
                        {
                            "attributeId": "9A48CF699E264496859EF316870FD809",
                            "referenceID": "dca637afa68115c711b959ec1863b302",
                            "internalId": "HE3_LANDSCAPE_COUNTRY",
                            "dataType": "STRING",
                            "value1": "DE",
                            "value2": null,
                            "defaultValue1": "DE",
                            "name": "HE3_LANDSCAPE_COUNTRY"
                        },
                        {
                            "attributeId": "9C93560682EA40ABB49EE076B5133EF9",
                            "referenceID": "d884db3922cb76716b5a136747a3c704",
                            "internalId": "HE3_CREATED_BY_NAME",
                            "dataType": "STRING",
                            "value1": "Shalini REPAKULA",
                            "value2": null,
                            "defaultValue1": "Shalini REPAKULA",
                            "name": "HE3_CREATED_BY_NAME"
                        },
                        {
                            "attributeId": "9D4BD1E294BD4154A7869FC8A48ED781",
                            "referenceID": "3cc4ec814935ab30000e2f5eff22f73b",
                            "internalId": "HE3_LANDSCAPE_OWNER_DESCR",
                            "dataType": "STRING",
                            "value1": "Goodyear Germany GmbH",
                            "value2": null,
                            "defaultValue1": "Goodyear Germany GmbH",
                            "name": "HE3_LANDSCAPE_OWNER_DESCR"
                        },
                        {
                            "attributeId": "F41B78165A674349A3473CAF8A2420D2",
                            "referenceID": "e2a870075054f5aacfe5fa834294d4e8",
                            "internalId": "HE3_LANDSCAPE_COUNTRY_DESCR",
                            "dataType": "STRING",
                            "value1": "Germany",
                            "value2": null,
                            "defaultValue1": "Germany",
                            "name": "HE3_LANDSCAPE_COUNTRY_DESCR"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "CF16DACD00E34ACF989043C181FD5C65",
            "internalId": "HEC3_LAN_ASSIGNMT",
            "attributeGroups": [
                {
                    "attributeGroupId": "561227645F1C454C81F5E66555F82124",
                    "referenceId": "8cfe99d67eaf47954c269910cc938da0",
                    "internalId": "HEC3_LAN_ASSIGNMT",
                    "attributes": [
                        {
                            "attributeId": "3FE837C20DA0446B9EDAC6E1770C6DDC",
                            "referenceID": "b397dc3f4bac349439dd942f09bc4f08",
                            "internalId": "HE3_APM_DESCR",
                            "dataType": "STRING",
                            "value1": "2021_8",
                            "value2": null,
                            "defaultValue1": "2021_8",
                            "name": "HE3_APM_DESCR"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "81E5216002B04EC2A4FDF37044B47922",
            "internalId": "HEC3_LAN_NON-PROD",
            "attributeGroups": [
                {
                    "attributeGroupId": "1612AAEBDE4D44B696CC4B5E96948091",
                    "referenceId": "2b00d4d602f622a4f2a84c9297f5e88d",
                    "internalId": "HEC3_LAN_NON-PROD",
                    "attributes": [
                        {
                            "attributeId": "1FF6E92B78AD49A68AAE603BCE1D7CA1",
                            "referenceID": "65b38848bbeebc79ea4676119990dc29",
                            "internalId": "HE3_NPROD_CMP_TIMEZONE",
                            "dataType": "STRING",
                            "value1": "EST",
                            "value2": null,
                            "defaultValue1": "EST",
                            "name": "HE3_NPROD_CMP_TIMEZONE"
                        },
                        {
                            "attributeId": "37C9D7286AAB498CBFCDCFC04DCFE7F8",
                            "referenceID": "2814ef73d7e2d7a232bedfa2d14cf9a0",
                            "internalId": "HE3_NPROD_STARTTIME",
                            "dataType": "STRING",
                            "value1": "60000 ",
                            "value2": null,
                            "defaultValue1": "60000 ",
                            "name": "HE3_NPROD_STARTTIME"
                        },
                        {
                            "attributeId": "9F657D1EA3444075A5FA61C3FF8D2835",
                            "referenceID": "f386636c28bc936c8fdd80022230358c",
                            "internalId": "HE3_NPROD_RECURRENCE_TYPE",
                            "dataType": "STRING",
                            "value1": "M",
                            "value2": null,
                            "defaultValue1": "M",
                            "name": "HE3_NPROD_RECURRENCE_TYPE"
                        },
                        {
                            "attributeId": "BBFC841DA7374A83AD971C171EFD2E79",
                            "referenceID": "d3c6482481536d0273d0ef95a06f9b47",
                            "internalId": "HE3_NPROD_DURATION",
                            "dataType": "STRING",
                            "value1": "004",
                            "value2": null,
                            "defaultValue1": "004",
                            "name": "HE3_NPROD_DURATION"
                        },
                        {
                            "attributeId": "EB765E2CD3D342CFBEE148A15C0FECD4",
                            "referenceID": "a7deb512a039f4e893a78ae3d48d73b4",
                            "internalId": "HE3_NPROD_DURATION_UNIT",
                            "dataType": "STRING",
                            "value1": "HUR",
                            "value2": null,
                            "defaultValue1": "HUR",
                            "name": "HE3_NPROD_DURATION_UNIT"
                        },
                        {
                            "attributeId": "F2EAAABCCA2740468A31E7A108C17B2F",
                            "referenceID": "4af101c61bfcfb5017526471980151c4",
                            "internalId": "HE3_NPROD_WEEKDAY",
                            "dataType": "STRING",
                            "value1": "4",
                            "value2": null,
                            "defaultValue1": "4",
                            "name": "HE3_NPROD_WEEKDAY"
                        },
                        {
                            "attributeId": "FE64376C2D5D42DDB2C59BD84E88E605",
                            "referenceID": "adea089c1bb6d39adbe4bdb7ab05e46c",
                            "internalId": "HE3_NPROD_RECURRENCE_INTERVAL",
                            "dataType": "STRING",
                            "value1": "1",
                            "value2": null,
                            "defaultValue1": "1",
                            "name": "HE3_NPROD_RECURRENCE_INTERVAL"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        },
        {
            "templateId": "8877DCA244A6412DB4833E835D5B8539",
            "internalId": "HEC3_LAN_PROD",
            "attributeGroups": [
                {
                    "attributeGroupId": "295D7C77CEE74B19B98E8CE9C0CE2A33",
                    "referenceId": "1e13b23c7112277f31ba7dceaf27a96f",
                    "internalId": "HEC3_LAN_PROD",
                    "attributes": [
                        {
                            "attributeId": "1077082E3E0544D698F5CD0487DEED98",
                            "referenceID": "840da7d2bf93140fbc5985ac7fffdd98",
                            "internalId": "HE3_PROD_DURATION",
                            "dataType": "STRING",
                            "value1": "004",
                            "value2": null,
                            "defaultValue1": "004",
                            "name": "HE3_PROD_DURATION"
                        },
                        {
                            "attributeId": "1640E62671DD4C5D98CE69C8ED57C2A9",
                            "referenceID": "e21b0fad2c17d563ac41b376bb91368d",
                            "internalId": "HE3_PROD_RECURRENCE_INTERVAL",
                            "dataType": "STRING",
                            "value1": "3",
                            "value2": null,
                            "defaultValue1": "3",
                            "name": "HE3_PROD_RECURRENCE_INTERVAL"
                        },
                        {
                            "attributeId": "37C3C43F4E2F4074B865146EABBEC3C5",
                            "referenceID": "4024f14f12eb78ae6a8c4e5771684914",
                            "internalId": "HE3_PROD_RECURRENCE_TYPE",
                            "dataType": "STRING",
                            "value1": "M",
                            "value2": null,
                            "defaultValue1": "M",
                            "name": "HE3_PROD_RECURRENCE_TYPE"
                        },
                        {
                            "attributeId": "6CF9BF73FE4B40F9A532A7DC251AA5BF",
                            "referenceID": "e06166bfcd70ffb6aa7277859a37d128",
                            "internalId": "HE3_PROD_WEEKDAY",
                            "dataType": "STRING",
                            "value1": "6",
                            "value2": null,
                            "defaultValue1": "6",
                            "name": "HE3_PROD_WEEKDAY"
                        },
                        {
                            "attributeId": "8613F11795FA466BBFB0A38BF37FF317",
                            "referenceID": "4d5d7a983f9dcb3f3335d7f721a1674f",
                            "internalId": "HE3_PROD_CMP_TIMEZONE",
                            "dataType": "STRING",
                            "value1": "EST",
                            "value2": null,
                            "defaultValue1": "EST",
                            "name": "HE3_PROD_CMP_TIMEZONE"
                        },
                        {
                            "attributeId": "D8AF21BB58674AE5ABC4FE9AB190DE84",
                            "referenceID": "111c8cee8e61a5b6de39dd8da0d5bec6",
                            "internalId": "HE3_PROD_DURATION_UNIT",
                            "dataType": "STRING",
                            "value1": "HUR",
                            "value2": null,
                            "defaultValue1": "HUR",
                            "name": "HE3_PROD_DURATION_UNIT"
                        },
                        {
                            "attributeId": "F1D5957DA78D41F5B294C02AAF3C8BB5",
                            "referenceID": "fd27e10804fd5ac837df8a8bb505e038",
                            "internalId": "HE3_PROD_STARTTIME",
                            "dataType": "STRING",
                            "value1": "0 ",
                            "value2": null,
                            "defaultValue1": "0 ",
                            "name": "HE3_PROD_STARTTIME"
                        }
                    ],
                    "attributeGroups": null
                }
            ],
            "nestedStructures": []
        }
    ]
}
const flatten_employees = flatten(employees);
const name = 'HE3_LANDSCAPE_OWNER_DESCR'
const found = Object.keys(flatten_employees).find(key=>flatten_employees[key]===name);
const index = found.lastIndexOf('.');
const before = found.slice(0, index);
const token = before + '.value1';
var f = flatten_employees[token];
f = undefined;
const defaultToken = before + '.defaultValue1';
if(!f){
    f = flatten_employees[defaultToken];
}

// const team = found.split(".",1);
console.log(f)