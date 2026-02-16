'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "379341fb535077abfa985776db670f99",
"assets/AssetManifest.bin.json": "c1e48ec7c1d8899bce1df3168725b777",
"assets/assets/data/australia.json": "a1f91171be99e91050164ab874eb4b42",
"assets/assets/data/chat_data.json": "764f9cd37f07dbbd9c9c064277bcfc98",
"assets/assets/data/contact_data.json": "167a07c7235c13343cc1b460d7b8dbd5",
"assets/assets/data/customers.json": "9e142854f56a1c5ed612a1dd047819e8",
"assets/assets/data/dashboard_data.json": "f1f68d0d6c6b00c670aaa3006aebb28f",
"assets/assets/data/discover.json": "7f1088d1356d9f31078704a03bdff04e",
"assets/assets/data/discover_2_data.json": "1b90d7475b4f521b4d8ebac2d7bfe366",
"assets/assets/data/europe_map.json": "bb09883ee18a3af276d84f4013666a78",
"assets/assets/data/food_data.json": "91e00fbd033d56efa9c80959f8844c19",
"assets/assets/data/job_dashboard_employee_data.json": "829d23f6ed0915f8a2cb122ba0f487d7",
"assets/assets/data/job_vacancy.json": "d6d0f63bcc123c7ad829ad1a336ff680",
"assets/assets/data/opportunities_data.json": "e7adfd5eca9025844508118aea396d32",
"assets/assets/data/products_data.json": "462e9b00386514ce3882175debdcdb11",
"assets/assets/data/product_detail.json": "122bee64636478cf24b07d8a49c81693",
"assets/assets/data/project_list_data.json": "eb323e73ca4b2cb8c06fd96667923ced",
"assets/assets/data/review.json": "31b992ecc6a0210e15c17b6bf0a5bfe6",
"assets/assets/data/todo_data.json": "3f8ddc6321b41e280dde095ebd4fd1d9",
"assets/assets/data/world_map.json": "2a54fbfcb2f8a1413e730e95c8549cef",
"assets/assets/images/auth/background.jpg": "7469fe433f6c7168a001d6a09b84fce8",
"assets/assets/images/dummy/1.jpg": "2d0338279ab774733ecf119e08610295",
"assets/assets/images/dummy/10.jpg": "1919e6e3ac455a78396aaaff43d5589d",
"assets/assets/images/dummy/11.jpg": "bf5d59ec2158f3d83b4a6a823661d314",
"assets/assets/images/dummy/12.jpg": "058d7b329a2b56c1a45b3ae7781a32f1",
"assets/assets/images/dummy/13.jpg": "568d35a4a18de358d3a6f10d6e2fb985",
"assets/assets/images/dummy/14.jpg": "4785ac10b3c5e77c7af49563860906c3",
"assets/assets/images/dummy/15.jpg": "d79c36e1ecc8b25306c97a480c5b7707",
"assets/assets/images/dummy/2.jpg": "c0bceb104e70804c635db83335cd595c",
"assets/assets/images/dummy/3.jpg": "a0538cf11c99325d08ebe02d0e2f82a7",
"assets/assets/images/dummy/4.jpg": "04bb4cbc13dbb079aeb2329d302b6394",
"assets/assets/images/dummy/5.jpg": "6bdc1245c016dd8f3a0f7cf3a114ffe1",
"assets/assets/images/dummy/6.jpg": "fb95b4331d3a4234331345590a6a460f",
"assets/assets/images/dummy/7.jpg": "6feb9e1c783190dd5127c86932f50518",
"assets/assets/images/dummy/8.jpg": "9b9a8e648c7ad0ad67a5935c2f6d7cc6",
"assets/assets/images/dummy/9.jpg": "62c485eeee8de9ae922e13448787e1f7",
"assets/assets/images/dummy/a1.jpg": "6807a2e9ae0757b7463dcff5d4e78983",
"assets/assets/images/dummy/a2.jpg": "397ffc6d89dd46c5494ef307e6c8932c",
"assets/assets/images/dummy/a3.jpg": "069df945775d3e291b6bafa474208120",
"assets/assets/images/dummy/a4.jpg": "bbe5c27105fb18f90d4d39d246bed14c",
"assets/assets/images/dummy/a5.jpg": "4767834c27471d2edad72d43010b5c04",
"assets/assets/images/dummy/a6.jpg": "4f24905229cd418c3ca7a6b548304561",
"assets/assets/images/dummy/a7.jpg": "b0dfabe6d05a90cf4b1bf76ddae6b52a",
"assets/assets/images/dummy/a8.jpg": "a11359bcf5ed3930f76b551808e934c3",
"assets/assets/images/dummy/avatar1.png": "c6e6058e6237e8ec68f1c17e6a69b96a",
"assets/assets/images/dummy/avatar10.png": "30d270888a7eefda5ace0035a20e6022",
"assets/assets/images/dummy/avatar11.png": "a5b57ced0fb981d9b53a51eb3c44251b",
"assets/assets/images/dummy/avatar12.png": "fb4dad15f84412689ed9dea8cbc830f4",
"assets/assets/images/dummy/avatar2.png": "66a61569cabe22b2be2ba34a45434f45",
"assets/assets/images/dummy/avatar3.png": "f61becb2f37ea74bac5fb9af4e1889a7",
"assets/assets/images/dummy/avatar4.png": "bb625096d7f3bd2c742fd71d18d8c85c",
"assets/assets/images/dummy/avatar5.png": "e625a919d7915ff9a442c5d6fc6a5508",
"assets/assets/images/dummy/avatar6.png": "3a1710e5017456bd097b70575aadf827",
"assets/assets/images/dummy/avatar7.png": "73c3047648a973bab4eb5f30ef7a703d",
"assets/assets/images/dummy/avatar8.png": "5fbe75d7763639386063f65c6eca8fb0",
"assets/assets/images/dummy/avatar9.png": "3e8a187b93258c1735aa0060a4cf3596",
"assets/assets/images/dummy/brand-1.jpg": "b668a8988926ff7ba58edbd58a0fe82a",
"assets/assets/images/dummy/brand-2.jpg": "3c4be06089401865db62404f38678e4a",
"assets/assets/images/dummy/brand-3.jpg": "021e8cf94059d126ac7e1294eeaecb2e",
"assets/assets/images/dummy/brand-4.jpg": "ab199135ecaae8ba3751b74ce6eee9aa",
"assets/assets/images/dummy/brand-5.jpg": "94422a40ba64cff2d1a9ec6e36284de3",
"assets/assets/images/dummy/brand-6.jpg": "de47378db0e4cee59a4a6eb4431d3fca",
"assets/assets/images/dummy/brand-7.jpg": "73c975ef55b4a0d685c56566c2eb9ae1",
"assets/assets/images/dummy/brand-8.jpg": "f4d36095ace6fa8859f06af325519df0",
"assets/assets/images/dummy/coming_soon-1.jpg": "4e3b175cc997596bc6a7951816950723",
"assets/assets/images/dummy/error-1.jpg": "6e82611e1c9542ec1748ab69f65de79d",
"assets/assets/images/dummy/error-2.jpg": "2918fa609529406920d0e6f2aebe338a",
"assets/assets/images/dummy/error-3.jpg": "1d20736971db870a29b3a08aa93b8fa6",
"assets/assets/images/dummy/error-4.jpg": "df9bfa2ba07e0febdf96fa76d3037b5b",
"assets/assets/images/dummy/error-5.jpg": "7bf2b56327fea40fe71cdd0d7c5f1509",
"assets/assets/images/dummy/google.png": "65c7e6fd157c435c6f5223a0d6043287",
"assets/assets/images/dummy/h1.jpg": "523e954f6e43a394420318fc4f15f3a9",
"assets/assets/images/dummy/h2.jpg": "e603b8880e8e0ea0b8de6f0c2a461b03",
"assets/assets/images/dummy/h3.jpg": "6847e351d9efe19c8de927b748f0f9ec",
"assets/assets/images/dummy/h4.jpg": "bb71a3e18cc3741431dba50e84c160bd",
"assets/assets/images/dummy/h5.jpg": "229e58adfaf51530a8ae6e2228234111",
"assets/assets/images/dummy/h6.jpg": "11cb9d90b5e6c92001362656303c8aa4",
"assets/assets/images/dummy/h7.jpg": "b800f411a9308c7126bcfc67ceea27c6",
"assets/assets/images/dummy/l1.jpg": "a530d59fa7fca0e2983d1ada0aec577a",
"assets/assets/images/dummy/l2.jpg": "6789631815c90d52eaaa3ca190a9ab40",
"assets/assets/images/dummy/l3.jpg": "73543363cfca8fb8307b8b850605990f",
"assets/assets/images/dummy/l4.jpg": "6e61e33609a76e1c425668e73dce7157",
"assets/assets/images/dummy/landing-1.jpg": "fa6ce9ede52e4e387f25f32020d91a73",
"assets/assets/images/dummy/landing-2.jpg": "3b220b249d317147546dcffdf246abf5",
"assets/assets/images/dummy/landing-3.jpg": "fc8e95902a411be297eff242d5f697b3",
"assets/assets/images/dummy/landing-4.jpg": "a9379304a6881589c10d4ab404ebace7",
"assets/assets/images/dummy/landing-5.jpg": "a5b445d62759790950864b6bac5d3b87",
"assets/assets/images/dummy/login1.jpg": "03d1dfc686973b9088e74ba8e41ae5ec",
"assets/assets/images/dummy/login2.jpg": "9dd949ba82e62865b0bca1a1c35f6ea3",
"assets/assets/images/dummy/login3.jpg": "4147c67ec2598fe574291cbf1474f097",
"assets/assets/images/dummy/login4.jpg": "98014387ca4c9a1f7c99ad3a7aa146f1",
"assets/assets/images/dummy/login5.jpg": "32376c1656bb0cd32dce5320838c06a2",
"assets/assets/images/dummy/login6.jpg": "b3028101973b605c1e79cdd3cf04072e",
"assets/assets/images/dummy/m-1.jpg": "839fb7b92dbfeb86be59c343bbd0393b",
"assets/assets/images/dummy/m-2.jpg": "d42e9822d8dae565c1704707ffa99705",
"assets/assets/images/dummy/m-3.jpg": "96de6cae58ae474870ef29f43e3a1245",
"assets/assets/images/dummy/m1.jpg": "75d84ef25cbf23e2df3deb053e42b7df",
"assets/assets/images/dummy/m2.jpg": "602b8f28cb6be6b599c7c71c25fecc4d",
"assets/assets/images/dummy/m3.jpg": "dd31845e4ab55f8ac0b4bc25aba3ecee",
"assets/assets/images/dummy/m4.jpg": "4d48509b2c0ef880d388cf7c27e1ab64",
"assets/assets/images/dummy/m5.jpg": "0302ba2b1eced67ba5d51f5b572dcc1d",
"assets/assets/images/dummy/m6.jpg": "0b1494e1fee543a20825beec0e9fc3fa",
"assets/assets/images/dummy/m7.jpg": "32d9f96d13d0e2ec32237474e75236f0",
"assets/assets/images/dummy/m8.jpg": "381c07e23648466c813039d1e07a24f0",
"assets/assets/images/dummy/maintenance-1.jpg": "695ee627e3201178f368d2a5fa78f483",
"assets/assets/images/dummy/nft1.jpeg": "de2c2ddb8ad62ab5f5ea363bb341041a",
"assets/assets/images/dummy/nft2.jpeg": "c7caf185d9bf116870c866bc40ea2cc1",
"assets/assets/images/dummy/nft3.jpeg": "ca32c7f2e068b52b3b1bfc908a6d2b04",
"assets/assets/images/dummy/p1.jpg": "0993a07c2eca498fc53abbb4754d4bb5",
"assets/assets/images/dummy/p2.jpg": "07975334d9a5cb9449a7fa9a5b5578ef",
"assets/assets/images/dummy/p3.jpg": "e2e0c556cdb1ff168b2fada00c161a97",
"assets/assets/images/dummy/s-1.jpg": "2d5c08ee01e49d5e278de3a5b45581af",
"assets/assets/images/dummy/shoes.png": "5fa627e53004b72582c5c98642285b2e",
"assets/assets/images/dummy/social-1.jpg": "6b3362eabff4a84bbbacbe99e0a92ac8",
"assets/assets/images/dummy/social-2.jpg": "5672c1bff49726b1a99a14bace0770ee",
"assets/assets/images/dummy/social-3.jpg": "36321ede8653a9842bb158e833806087",
"assets/assets/images/dummy/social-4.jpg": "c4669abf5c4950d89ba03c053af022d3",
"assets/assets/images/dummy/social-5.jpg": "0590933a38c763b2f7ffacfdb2325a2d",
"assets/assets/images/food/american_favourite.jpg": "9a74cb569a7b2443bb861978ceeb0afd",
"assets/assets/images/food/burger_chicken.jpg": "2afcd46f3f87263d0522f4524fff9a29",
"assets/assets/images/food/chapman.jpg": "cacfb1faeec7c4453ce11be46a85b418",
"assets/assets/images/food/chicken.jpg": "bf8a26a35458503a26feb17e79e462d7",
"assets/assets/images/food/humburger.jpg": "9783542c2c0fa82c8f87e589408fe0d6",
"assets/assets/images/food/pizza.jpg": "345ed390f023064ee4f40701640395b5",
"assets/assets/images/food/samosa.jpg": "3ca69aacce66ed6a5702cd69b35276be",
"assets/assets/images/food/waffles.jpg": "b74033e52d2b71e8a8042244711904ed",
"assets/assets/images/logo/ethereum-eth-logo.png": "3a3285881789dc8b524b6e5b42012460",
"assets/assets/images/logo/logo_icon_dark.png": "f15c1ac2557c88ee768165b185a20ad1",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/ar.json": "30fe189880bde72f2e34b2bf51bd236f",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/en.json": "7f4eb68842f8fe4b7904ed581791c79d",
"assets/assets/lang/es.jpg": "25d67fb418ce2623d770679b2fd4f575",
"assets/assets/lang/es.json": "1426f63dfc62a7bef7f2ad1bd583a1d5",
"assets/assets/lang/fr.jpg": "ed28420a8f74b0631c24659a40511c2d",
"assets/assets/lang/fr.json": "a48f2c0b4c83dc927581a8aa644fb30b",
"assets/assets/lang/hi.jpg": "806b19b66156a2bfcb232d4f6518747a",
"assets/assets/lang/hi.json": "e47582d957b2d32cd7c940e109808568",
"assets/FontManifest.json": "e2e8c383e3a354184d7924d38648714d",
"assets/fonts/MaterialIcons-Regular.otf": "18a18c253d5058368ba0bbf1ead90962",
"assets/NOTICES": "aefa9e4b2eb526c4dc9573d8e9dbfafd",
"assets/packages/appflowy_editor/assets/images/case_sensitive.svg": "1f93577f39711359040ffde3d815fdc6",
"assets/packages/appflowy_editor/assets/images/check.svg": "c7b016041b6a5b0ce7cd50b7277364ec",
"assets/packages/appflowy_editor/assets/images/checkmark.svg": "3dc55867deb579484c5702a79054bb0e",
"assets/packages/appflowy_editor/assets/images/clear.svg": "f74736135d3ee5656b916262104469d0",
"assets/packages/appflowy_editor/assets/images/clear_highlight_color.svg": "0b35a31822656c53578fb91acdfacb31",
"assets/packages/appflowy_editor/assets/images/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/delete.svg": "4a8d17ccc8cd1bd44a472f66ad028a01",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_center.svg": "e82165a5f6fb20a7ad3a6faf0ab735cc",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_left.svg": "fcd2f1a9124961798dd7009f27172a64",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_right.svg": "bf18d4c1654d502abea1d2c8aa010c30",
"assets/packages/appflowy_editor/assets/images/image_toolbar/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/image_toolbar/delete.svg": "15cbb502f4554ee7a443207099cc839a",
"assets/packages/appflowy_editor/assets/images/image_toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/image_toolbar/share.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/link.svg": "d323cd62b3df10a342e8e78ca50bf4e1",
"assets/packages/appflowy_editor/assets/images/point.svg": "50c7d9067a4a84945f1d79640589f501",
"assets/packages/appflowy_editor/assets/images/quote.svg": "ba6e97b8ddde8bf842fe2a56d06003ad",
"assets/packages/appflowy_editor/assets/images/regex.svg": "31424cd1f827bb7f237cd8e56c58f941",
"assets/packages/appflowy_editor/assets/images/reset_text_color.svg": "a9ecce95365f0b4636ad43cc054d87e4",
"assets/packages/appflowy_editor/assets/images/selection_menu/bulleted_list.svg": "7b22749438c843bc176fb559c924ad21",
"assets/packages/appflowy_editor/assets/images/selection_menu/checkbox.svg": "b81c986f918f1bd859fe07717b1e9d59",
"assets/packages/appflowy_editor/assets/images/selection_menu/h1.svg": "8135d2d5883f5cdd8776dca2dddb5f9b",
"assets/packages/appflowy_editor/assets/images/selection_menu/h2.svg": "129cb4e93b4badba4805968b13d52098",
"assets/packages/appflowy_editor/assets/images/selection_menu/h3.svg": "cd75480a77da1cabc7c5c2bf81325322",
"assets/packages/appflowy_editor/assets/images/selection_menu/image.svg": "92468547c1be63604f0820e565a1a6c2",
"assets/packages/appflowy_editor/assets/images/selection_menu/number.svg": "9dad0889a48bb8f0ff288a5c0b711ab4",
"assets/packages/appflowy_editor/assets/images/selection_menu/quote.svg": "f58d378109520a8058edb4fed9d9ddbb",
"assets/packages/appflowy_editor/assets/images/selection_menu/text.svg": "890a3a1b0a674b1fbd769f42520cfef7",
"assets/packages/appflowy_editor/assets/images/toolbar/bold.svg": "51e86ea040233e6a093caf02eea0c5f4",
"assets/packages/appflowy_editor/assets/images/toolbar/bulleted_list.svg": "b9441734387d7df0122b9dc629ca6bbb",
"assets/packages/appflowy_editor/assets/images/toolbar/center.svg": "c44cf79c7fae101e6fb9daa8aaf62a54",
"assets/packages/appflowy_editor/assets/images/toolbar/code.svg": "2d41f509ac1e1b1eb60c9adedc75ce03",
"assets/packages/appflowy_editor/assets/images/toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/toolbar/h1.svg": "735f59f34690e55680453a0d018ada75",
"assets/packages/appflowy_editor/assets/images/toolbar/h2.svg": "bf7b09c579a5db9e6392b01f95909347",
"assets/packages/appflowy_editor/assets/images/toolbar/h3.svg": "30d4699894d5de3b696b11cf678b35a0",
"assets/packages/appflowy_editor/assets/images/toolbar/highlight_color.svg": "f8dd55016252c335c33e97fb39159882",
"assets/packages/appflowy_editor/assets/images/toolbar/italic.svg": "b96a655409eea41190182ae3ab3ed500",
"assets/packages/appflowy_editor/assets/images/toolbar/left.svg": "511106ad3206b6ccbf9702f22b0097db",
"assets/packages/appflowy_editor/assets/images/toolbar/link.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/toolbar/numbered_list.svg": "a6072f727ea30c379dd5e0e2909790c4",
"assets/packages/appflowy_editor/assets/images/toolbar/quote.svg": "7d20ee07b7f80cc886294a43a0db0b3d",
"assets/packages/appflowy_editor/assets/images/toolbar/right.svg": "19968f066c5bccae9f3e059f04492850",
"assets/packages/appflowy_editor/assets/images/toolbar/strikethrough.svg": "82564a24aa7e82675d377431ac8fb075",
"assets/packages/appflowy_editor/assets/images/toolbar/text.svg": "2b52bcda2b12945b27e859c414ef43c9",
"assets/packages/appflowy_editor/assets/images/toolbar/text_color.svg": "b912db1bb9568af27b19e2946e38cf38",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_auto.svg": "74b07c6cd726be519ea32060d7a4b78c",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_ltr.svg": "16a42742a29ea1cf30253cd9429095cd",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_rtl.svg": "a994493865a43a16af27155434be4a6c",
"assets/packages/appflowy_editor/assets/images/toolbar/underline.svg": "fc86b2c49c42f5b9322a4ba76d066203",
"assets/packages/appflowy_editor/assets/images/uncheck.svg": "d94aa89207d28adebb0a4e11237f1c57",
"assets/packages/appflowy_editor/assets/images/upload_image.svg": "67fac764479d7cded5e98f6fe58c75ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bold.svg": "7118c4686f95cedaa776faf7924c89a0",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bulleted_list.svg": "4d7dba759b6073003a84e5938aa043b2",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/checkbox.svg": "eda1fb784a3429e96b42b7f24b7ea4c9",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/close.svg": "aa945f43dcd92bce9b5c810eb33940be",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/code.svg": "02ef07d8ea084d72dc2f4cc74a1b756d",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/color.svg": "d061328f2a2b335e121c44dccff39a43",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/divider.svg": "098194a544d649f3545d35f301b0191f",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h1.svg": "295c462eeb57150f11a2e747d9220869",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h2.svg": "88278b54319f416c66c1cf830fcf6c42",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h3.svg": "ba38c1cdee5d41663df86128b73b835e",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/heading.svg": "8e872c0f97c1740a2f9858523aeb7743",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/italic.svg": "c8585c2f19414f94f26430e8eecc4bb3",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/link.svg": "d7a05e0d3a904118900ca7d8e3cf47b4",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/list.svg": "ed5fb52546835a9865541c1e2c06c20c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/numbered_list.svg": "1daa60662c6ab43e65ac96e9e930b745",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/quote.svg": "dda6772a0e0d9b40e8aad07ff377ffc1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/setting.svg": "0cb728ff605b6f7457950f3a47d291f1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/strikethrough.svg": "c82d154453ef6759daa7cebb397cf58c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/text_decoration.svg": "e4dd4997dec353c1eb7cdfab039a49ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/underline.svg": "472439a97df9c883661d818045a40d95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_lucide/lib/fonts/lucide.ttf": "128d53e75a08677bed5550f9b68c09f0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/syncfusion_flutter_calendar/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/syncfusion_flutter_calendar/assets/images/May.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle11.png": "1b3d36d168f8f27a027b3d5fe54354b2",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle13.png": "73da9fb063f6307b928808b8b49a7c71",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle15.png": "e8d60d3a29c062b0213e0c433353c37b",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle18.png": "9cc9674b42891b1757db7b73e593c1de",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle20.png": "52cdbc89f084428e9df1fdaf75bcf918",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle23.png": "05985cfc1de3cc32355ae56fe6652b1f",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle24.png": "0a33516701ea509f461e87a1771f9c8c",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle25.png": "a92b2550be278d8dcfa183d680b61ecb",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle26.png": "084a7485156f49757e53c3910e532cc9",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle27.png": "8df8e8574e1e33751beced5cae1035b3",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle5.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle8.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "f15c1ac2557c88ee768165b185a20ad1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5b278205a46bd6ef9cefeadc2803101e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/splash.png": "6a431ea1995098b1923e90dc0eef63da",
"index.html": "610ffc4e5c8f6954fb2846875e1b7958",
"/": "610ffc4e5c8f6954fb2846875e1b7958",
"main.dart.js": "3b98fd5eb74acb190c6d407284eb920e",
"manifest.json": "b7dceffa923f492c8a77095e414fe152",
"version.json": "371812bd00996e2028f610beefedc90b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
