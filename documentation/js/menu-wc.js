'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">xbox-live-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-a3a27ed2f75e28c2c381d821493de28cd618e178ca056b7c8a908fc1dac6635a2c5cc7890fcb7d4273c71c0f20fd9e73d18b83026ec83294b5cad28c1b91e4a3"' : 'data-target="#xs-controllers-links-module-AppModule-a3a27ed2f75e28c2c381d821493de28cd618e178ca056b7c8a908fc1dac6635a2c5cc7890fcb7d4273c71c0f20fd9e73d18b83026ec83294b5cad28c1b91e4a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a3a27ed2f75e28c2c381d821493de28cd618e178ca056b7c8a908fc1dac6635a2c5cc7890fcb7d4273c71c0f20fd9e73d18b83026ec83294b5cad28c1b91e4a3"' :
                                            'id="xs-controllers-links-module-AppModule-a3a27ed2f75e28c2c381d821493de28cd618e178ca056b7c8a908fc1dac6635a2c5cc7890fcb7d4273c71c0f20fd9e73d18b83026ec83294b5cad28c1b91e4a3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a3a27ed2f75e28c2c381d821493de28cd618e178ca056b7c8a908fc1dac6635a2c5cc7890fcb7d4273c71c0f20fd9e73d18b83026ec83294b5cad28c1b91e4a3"' : 'data-target="#xs-injectables-links-module-AppModule-a3a27ed2f75e28c2c381d821493de28cd618e178ca056b7c8a908fc1dac6635a2c5cc7890fcb7d4273c71c0f20fd9e73d18b83026ec83294b5cad28c1b91e4a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a3a27ed2f75e28c2c381d821493de28cd618e178ca056b7c8a908fc1dac6635a2c5cc7890fcb7d4273c71c0f20fd9e73d18b83026ec83294b5cad28c1b91e4a3"' :
                                        'id="xs-injectables-links-module-AppModule-a3a27ed2f75e28c2c381d821493de28cd618e178ca056b7c8a908fc1dac6635a2c5cc7890fcb7d4273c71c0f20fd9e73d18b83026ec83294b5cad28c1b91e4a3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-94d1416e8b6b85afc74b9419bceaa94014d4361c312d96706775410fe01b7626f15207b8b1ec5c1be385c2d987bb7b9dab5ea313f23c0fd86d6affff6b673201"' : 'data-target="#xs-controllers-links-module-AuthModule-94d1416e8b6b85afc74b9419bceaa94014d4361c312d96706775410fe01b7626f15207b8b1ec5c1be385c2d987bb7b9dab5ea313f23c0fd86d6affff6b673201"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-94d1416e8b6b85afc74b9419bceaa94014d4361c312d96706775410fe01b7626f15207b8b1ec5c1be385c2d987bb7b9dab5ea313f23c0fd86d6affff6b673201"' :
                                            'id="xs-controllers-links-module-AuthModule-94d1416e8b6b85afc74b9419bceaa94014d4361c312d96706775410fe01b7626f15207b8b1ec5c1be385c2d987bb7b9dab5ea313f23c0fd86d6affff6b673201"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-94d1416e8b6b85afc74b9419bceaa94014d4361c312d96706775410fe01b7626f15207b8b1ec5c1be385c2d987bb7b9dab5ea313f23c0fd86d6affff6b673201"' : 'data-target="#xs-injectables-links-module-AuthModule-94d1416e8b6b85afc74b9419bceaa94014d4361c312d96706775410fe01b7626f15207b8b1ec5c1be385c2d987bb7b9dab5ea313f23c0fd86d6affff6b673201"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-94d1416e8b6b85afc74b9419bceaa94014d4361c312d96706775410fe01b7626f15207b8b1ec5c1be385c2d987bb7b9dab5ea313f23c0fd86d6affff6b673201"' :
                                        'id="xs-injectables-links-module-AuthModule-94d1416e8b6b85afc74b9419bceaa94014d4361c312d96706775410fe01b7626f15207b8b1ec5c1be385c2d987bb7b9dab5ea313f23c0fd86d6affff6b673201"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenerosModule.html" data-type="entity-link" >GenerosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GenerosModule-b75ab46cb0ae61e9f18c29883544535cc65b1f2dc7458bbea393e22a74146e6fa0a1722b54b77fd43933204d4a8843f0bf5e7fa30e6c8f139f7aef179b4c6868"' : 'data-target="#xs-controllers-links-module-GenerosModule-b75ab46cb0ae61e9f18c29883544535cc65b1f2dc7458bbea393e22a74146e6fa0a1722b54b77fd43933204d4a8843f0bf5e7fa30e6c8f139f7aef179b4c6868"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GenerosModule-b75ab46cb0ae61e9f18c29883544535cc65b1f2dc7458bbea393e22a74146e6fa0a1722b54b77fd43933204d4a8843f0bf5e7fa30e6c8f139f7aef179b4c6868"' :
                                            'id="xs-controllers-links-module-GenerosModule-b75ab46cb0ae61e9f18c29883544535cc65b1f2dc7458bbea393e22a74146e6fa0a1722b54b77fd43933204d4a8843f0bf5e7fa30e6c8f139f7aef179b4c6868"' }>
                                            <li class="link">
                                                <a href="controllers/GenerosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GenerosModule-b75ab46cb0ae61e9f18c29883544535cc65b1f2dc7458bbea393e22a74146e6fa0a1722b54b77fd43933204d4a8843f0bf5e7fa30e6c8f139f7aef179b4c6868"' : 'data-target="#xs-injectables-links-module-GenerosModule-b75ab46cb0ae61e9f18c29883544535cc65b1f2dc7458bbea393e22a74146e6fa0a1722b54b77fd43933204d4a8843f0bf5e7fa30e6c8f139f7aef179b4c6868"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GenerosModule-b75ab46cb0ae61e9f18c29883544535cc65b1f2dc7458bbea393e22a74146e6fa0a1722b54b77fd43933204d4a8843f0bf5e7fa30e6c8f139f7aef179b4c6868"' :
                                        'id="xs-injectables-links-module-GenerosModule-b75ab46cb0ae61e9f18c29883544535cc65b1f2dc7458bbea393e22a74146e6fa0a1722b54b77fd43933204d4a8843f0bf5e7fa30e6c8f139f7aef179b4c6868"' }>
                                        <li class="link">
                                            <a href="injectables/GenerosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JogosModule.html" data-type="entity-link" >JogosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-JogosModule-8e71553a5a84db280b57d985f4df4ae09695719ff54e80eff1d08d468830cd44ca246f067c8b74024d88efed81304b3b8cb7602c45329e627bd032928b6a6625"' : 'data-target="#xs-controllers-links-module-JogosModule-8e71553a5a84db280b57d985f4df4ae09695719ff54e80eff1d08d468830cd44ca246f067c8b74024d88efed81304b3b8cb7602c45329e627bd032928b6a6625"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JogosModule-8e71553a5a84db280b57d985f4df4ae09695719ff54e80eff1d08d468830cd44ca246f067c8b74024d88efed81304b3b8cb7602c45329e627bd032928b6a6625"' :
                                            'id="xs-controllers-links-module-JogosModule-8e71553a5a84db280b57d985f4df4ae09695719ff54e80eff1d08d468830cd44ca246f067c8b74024d88efed81304b3b8cb7602c45329e627bd032928b6a6625"' }>
                                            <li class="link">
                                                <a href="controllers/JogosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JogosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JogosModule-8e71553a5a84db280b57d985f4df4ae09695719ff54e80eff1d08d468830cd44ca246f067c8b74024d88efed81304b3b8cb7602c45329e627bd032928b6a6625"' : 'data-target="#xs-injectables-links-module-JogosModule-8e71553a5a84db280b57d985f4df4ae09695719ff54e80eff1d08d468830cd44ca246f067c8b74024d88efed81304b3b8cb7602c45329e627bd032928b6a6625"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JogosModule-8e71553a5a84db280b57d985f4df4ae09695719ff54e80eff1d08d468830cd44ca246f067c8b74024d88efed81304b3b8cb7602c45329e627bd032928b6a6625"' :
                                        'id="xs-injectables-links-module-JogosModule-8e71553a5a84db280b57d985f4df4ae09695719ff54e80eff1d08d468830cd44ca246f067c8b74024d88efed81304b3b8cb7602c45329e627bd032928b6a6625"' }>
                                        <li class="link">
                                            <a href="injectables/JogosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JogosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerfisModule.html" data-type="entity-link" >PerfisModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PerfisModule-cd58d6787f51076b022b29898b7702f3777f82301ae8f63aeb85e9eac55c49e46aebdbd6eb467ff7991c652c1d73745d561f73b75eb523854705634dd69b620b"' : 'data-target="#xs-controllers-links-module-PerfisModule-cd58d6787f51076b022b29898b7702f3777f82301ae8f63aeb85e9eac55c49e46aebdbd6eb467ff7991c652c1d73745d561f73b75eb523854705634dd69b620b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PerfisModule-cd58d6787f51076b022b29898b7702f3777f82301ae8f63aeb85e9eac55c49e46aebdbd6eb467ff7991c652c1d73745d561f73b75eb523854705634dd69b620b"' :
                                            'id="xs-controllers-links-module-PerfisModule-cd58d6787f51076b022b29898b7702f3777f82301ae8f63aeb85e9eac55c49e46aebdbd6eb467ff7991c652c1d73745d561f73b75eb523854705634dd69b620b"' }>
                                            <li class="link">
                                                <a href="controllers/PerfisController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfisController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PerfisModule-cd58d6787f51076b022b29898b7702f3777f82301ae8f63aeb85e9eac55c49e46aebdbd6eb467ff7991c652c1d73745d561f73b75eb523854705634dd69b620b"' : 'data-target="#xs-injectables-links-module-PerfisModule-cd58d6787f51076b022b29898b7702f3777f82301ae8f63aeb85e9eac55c49e46aebdbd6eb467ff7991c652c1d73745d561f73b75eb523854705634dd69b620b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PerfisModule-cd58d6787f51076b022b29898b7702f3777f82301ae8f63aeb85e9eac55c49e46aebdbd6eb467ff7991c652c1d73745d561f73b75eb523854705634dd69b620b"' :
                                        'id="xs-injectables-links-module-PerfisModule-cd58d6787f51076b022b29898b7702f3777f82301ae8f63aeb85e9eac55c49e46aebdbd6eb467ff7991c652c1d73745d561f73b75eb523854705634dd69b620b"' }>
                                        <li class="link">
                                            <a href="injectables/PerfisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfisService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuariosModule.html" data-type="entity-link" >UsuariosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsuariosModule-ec6e391f66dfc94cf1d8c9ab82a290838d4c69a32c0e3904cc45a041ccb5290f795b0657a6a5f060e047645b929a68bf4bbd4dceba414039d7269263f75f1abf"' : 'data-target="#xs-controllers-links-module-UsuariosModule-ec6e391f66dfc94cf1d8c9ab82a290838d4c69a32c0e3904cc45a041ccb5290f795b0657a6a5f060e047645b929a68bf4bbd4dceba414039d7269263f75f1abf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuariosModule-ec6e391f66dfc94cf1d8c9ab82a290838d4c69a32c0e3904cc45a041ccb5290f795b0657a6a5f060e047645b929a68bf4bbd4dceba414039d7269263f75f1abf"' :
                                            'id="xs-controllers-links-module-UsuariosModule-ec6e391f66dfc94cf1d8c9ab82a290838d4c69a32c0e3904cc45a041ccb5290f795b0657a6a5f060e047645b929a68bf4bbd4dceba414039d7269263f75f1abf"' }>
                                            <li class="link">
                                                <a href="controllers/UsuariosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsuariosModule-ec6e391f66dfc94cf1d8c9ab82a290838d4c69a32c0e3904cc45a041ccb5290f795b0657a6a5f060e047645b929a68bf4bbd4dceba414039d7269263f75f1abf"' : 'data-target="#xs-injectables-links-module-UsuariosModule-ec6e391f66dfc94cf1d8c9ab82a290838d4c69a32c0e3904cc45a041ccb5290f795b0657a6a5f060e047645b929a68bf4bbd4dceba414039d7269263f75f1abf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuariosModule-ec6e391f66dfc94cf1d8c9ab82a290838d4c69a32c0e3904cc45a041ccb5290f795b0657a6a5f060e047645b929a68bf4bbd4dceba414039d7269263f75f1abf"' :
                                        'id="xs-injectables-links-module-UsuariosModule-ec6e391f66dfc94cf1d8c9ab82a290838d4c69a32c0e3904cc45a041ccb5290f795b0657a6a5f060e047645b929a68bf4bbd4dceba414039d7269263f75f1abf"' }>
                                        <li class="link">
                                            <a href="injectables/UsuariosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GenerosController.html" data-type="entity-link" >GenerosController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JogosController.html" data-type="entity-link" >JogosController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PerfisController.html" data-type="entity-link" >PerfisController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsuariosController.html" data-type="entity-link" >UsuariosController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateGenerosDto.html" data-type="entity-link" >CreateGenerosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJogosDto.html" data-type="entity-link" >CreateJogosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePerfilJogosDto.html" data-type="entity-link" >CreatePerfilJogosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePerfisDto.html" data-type="entity-link" >CreatePerfisDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsuariosDto.html" data-type="entity-link" >CreateUsuariosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genero.html" data-type="entity-link" >Genero</a>
                            </li>
                            <li class="link">
                                <a href="classes/Jogo.html" data-type="entity-link" >Jogo</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Perfil.html" data-type="entity-link" >Perfil</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGenerosDto.html" data-type="entity-link" >UpdateGenerosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJogosDto.html" data-type="entity-link" >UpdateJogosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePerfilJogosDto.html" data-type="entity-link" >UpdatePerfilJogosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePerfisDto.html" data-type="entity-link" >UpdatePerfisDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsuariosDto.html" data-type="entity-link" >UpdateUsuariosDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenerosService.html" data-type="entity-link" >GenerosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JogosService.html" data-type="entity-link" >JogosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PerfisService.html" data-type="entity-link" >PerfisService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});