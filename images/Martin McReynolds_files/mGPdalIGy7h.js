if (self.CavalryLogger) { CavalryLogger.start_js(["Jbf7A"]); }

__d("AppsDivebarDisplayController",["cx","AppsDivebarConfigData","Arbiter","AsyncRequest","CSS","UIPagelet","$"],(function(a,b,c,d,e,f,g){__p&&__p();var h=171;a={isVisible:function(){if(this._visible!==void 0)return this._visible;this._visible=!b("AppsDivebarConfigData").hidden;return this._visible},showApps:function(){this._visible=!0;var a={fb_source_category:"sidebar"};b("UIPagelet").loadFromEndpoint("GamesDivebarPagelet","pagelet_canvas_nav_content",a);b("CSS").show(b("$")("apps_gripper"));b("CSS").show(b("$")("pagelet_canvas_nav_content"));b("CSS").addClass(b("$")("pagelet_canvas_nav_content"),"_4woj");b("Arbiter").inform("AppsDivebar/show-apps");new(b("AsyncRequest"))("/ajax/feed/apps/resize").setData({height:""+h,menu:!0}).setMethod("POST").send()},hideApps:function(){this._visible=!1,b("CSS").hide(b("$")("pagelet_canvas_nav_content")),b("CSS").hide(b("$")("apps_gripper")),b("Arbiter").inform("AppsDivebar/hide-apps"),new(b("AsyncRequest"))("/ajax/feed/apps/resize").setData({height:"1",menu:!0}).setMethod("POST").send()}};e.exports=a}),null);
__d("RequestsJewel",["RequestsJewelController"],(function(a,b,c,d,e,f){__p&&__p();a=function(a,c){"use strict";var d=b("RequestsJewelController").create(a.getFlyout(),function(){return a.isOpen()});a.subscribe("marked-seen",function(){return d.markSeen()});a.subscribe("closed",function(){return d.closeHandler()});a.subscribe("opened",function(){return d.openHandler()})};e.exports=a}),null);
__d("ChatSidebarGroupCreateButtonReact.bs",["cx","fbt","bs_curry","React","QE2Logger","Link.react","ReasonReact.bs","joinClasses","MercuryConfig","MessengerGroupCreateDialogReact.bs","XWorkSaveGroupPurposeController","MessengerGroupCreationEntryPoint","WorkSyncedGroupCreationEntryPoint"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MessengerGroupCreationEntryPoint").GCF_CHAT_SIDEBAR;function j(a,c){if(a)return b("ReasonReact.bs").element(void 0,void 0,b("MessengerGroupCreateDialogReact.bs").make(i,!0,c,[]));else return null}function a(a){__p&&__p();var c=b("React").useState(function(){return!1}),d=c[1],e=h._("Create New Group");b("QE2Logger").logExposureForUser("workchat_synced_groups_universe",a.viewer);var f=b("MercuryConfig").WorkSyncedGroupAutoCreateEnabled;f=f?[b("XWorkSaveGroupPurposeController").getURIBuilder().setString("purpose","work_teamwork").setString("ref",b("WorkSyncedGroupCreationEntryPoint").GROUP_CREATION_ICON_ON_CHAT_SIDEBAR).setBool("back_disallowed",!0).getURI(),function(){return 0},"dialog"]:["#",function(){return b("bs_curry")._1(d,function(){return!0})},""];var g="_1-4-";a=a.className;a=a!==void 0?b("joinClasses")(g,a):g;return b("React").createElement("div",{className:"_46fv"},j(c[0],function(){return b("bs_curry")._1(d,function(){return!1})}),b("React").createElement(b("Link.react"),{"aria-label":e,"data-hover":"tooltip","data-tooltip-content":e,"data-tooltip-position":"below",className:a,href:f[0],onClick:f[1],rel:f[2]}))}f.entryPoint=i;f.renderDialog=j;f.make=a}),null);
__d("ChatSidebarComposeLink.react",["fbt","ChatOpenTabEventLogger","CurrentUser","FantaTabActions","Link.react","MessengerState.bs","React","TooltipData"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){return a.call(this,b)||this}var d=c.prototype;d.render=function(){var a=g._("New Message");return b("React").createElement(b("Link.react"),babelHelpers["extends"]({label:a,className:this.props.className,href:"#",onClick:this.$1},b("TooltipData").propsFor(a,"below")))};d.$1=function(a){var c=b("MessengerState.bs").createNewLocalThreadGenerateID(b("CurrentUser").getID());b("FantaTabActions").openNewMessageTab(c,"compose_link");b("ChatOpenTabEventLogger").logClickOpen("sidebar",c);a.preventDefault()};return c}(b("React").Component);e.exports=a}),null);
__d("XChatEmojiSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/emoji_settings/",{__asyncDialog:{type:"Int"}})}),null);
__d("XVideoCallOffDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videocall/off/",{__asyncDialog:{type:"Int"}})}),null);
__d("ChatSidebarDropdown.react",["cx","fbt","AppsDivebarDisplayController","Arbiter","AsyncRequest","BanzaiODS","Bootloader","ChatConfig","ChatOptions","ChatSidebarBotsActions","ChatSidebarBotsStore","ChatSidebarDropdownConstants","ChatVisibility","ContextualDialogArrow","ContextualLayerAutoFlip","ConversationNubUtils","CurrentUser","FantaTabActions","FBRTCCallBlockingStore","LayerHideOnBlur","Link.react","LogHistory","MenuSeparator.react","PinnedConversationNubsConfig","PopoverMenu.react","PresencePrivacy","PresenceState","React","ReactXUIMenu","SidebarType","SubscriptionsHandler","TrackingNodes","URI","XChatEmojiSettingsController","XVideoCallOffDialogController","emptyFunction","gkx","joinClasses","qex"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ChatSidebarBotsActions").module,j=b("ChatSidebarBotsStore").module,k=b("ReactXUIMenu").SelectableItem,l=b("ReactXUIMenu").SelectableMenu,m=b("ReactXUIMenu").Item,n=b("LogHistory").getInstance("blackbird");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={appsVisible:b("AppsDivebarDisplayController").isVisible(),isConversationsEnabled:b("PinnedConversationNubsConfig").isEnabled,isDiscoverBotsHidden:j?j.getState().isHidden:!0,isOnline:b("ChatVisibility").isOnline(),isCallBlocked:b("FBRTCCallBlockingStore").getBlockingStatus(),pendingChange:!1},d.$8=function(a,b){a=b.item.getValue();b=b.item.isSelected&&b.item.isSelected();d.$5(a,!!b)},d.$27=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.startFunnel("WWW_PRESENCE_FUNNEL"),a.appendActionWithTag("WWW_PRESENCE_FUNNEL","click_gear",b("PresencePrivacy").getOnlinePolicyStr())},"ChatSidebarDropdown.react"),d.props.onShow&&d.props.onShow()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){__p&&__p();var a=this;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe(["AppsDivebar/show-apps","AppsDivebar/hide-apps"],function(){a.setState({appsVisible:b("AppsDivebarDisplayController").isVisible()})}),b("PresencePrivacy").subscribe("privacy-user-presence-changed",function(){a.setState({isOnline:b("ChatVisibility").isOnline()})}),b("Arbiter").subscribe("buddylist/hide",function(){a.refs.menu.hidePopover()}),b("Arbiter").subscribe("sidebar/visibility",function(b,c){c||a.refs.menu.hidePopover()}),b("FBRTCCallBlockingStore").addListener(function(){a.setState({isCallBlocked:b("FBRTCCallBlockingStore").getBlockingStatus()})}));j&&this.$1.addSubscriptions(j.addListener(function(){a.setState({isDiscoverBotsHidden:j.getState().isHidden})}));b("PinnedConversationNubsConfig").userSettingsIsEnabled&&this.$1.addSubscriptions(b("Arbiter").subscribe(b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT,function(){a.setState({isConversationsEnabled:!1})}),b("Arbiter").subscribe(b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT,function(){a.setState({isConversationsEnabled:!0})}));var c=b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS);this.$2(c)};d.$2=function(a){var c=null;a===void 0?c="turn_off_chat_tabs.uninitialized":a?c="turn_off_chat_tabs.true":c="turn_off_chat_tabs.false";b("BanzaiODS").bumpEntityKey("messenger_web_chat_options",c)};d.componentWillUnmount=function(){this.$1&&this.$1.release()};d.$3=function(a,b){b=b?"sidebar_dropdown_visibility_error":"sidebar_dropdown_set_visibility";n.debug(b,JSON.stringify({action:a}))};d.$4=function(a,c){__p&&__p();var d=this;if(this.state.pendingChange)return;this.setState({pendingChange:!0});var e={};e[a]=!c;b("ChatOptions").setSetting(a,!c,"mini_sidebar_menu");new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(function(a){return b("PresenceState").doSync(!0)}).setErrorHandler(function(){return b("ChatOptions").setSetting(a,c,"mini_sidebar_menu_error")}).setFinallyHandler(function(){return d.setState({pendingChange:!1})}).setData(e).setAllowCrossPageTransition(!0).send()};d.$5=function(a,c){__p&&__p();var d=!0;switch(a){case b("ChatSidebarDropdownConstants").SOUND:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").ADVANCED_SETTINGS:case b("ChatSidebarDropdownConstants").TURN_OFF_DIALOG:this.$6();this.$3(a,!1);break;case b("ChatSidebarDropdownConstants").LOWER_ALL_TABS:b("FantaTabActions").minimizeAllTabs();break;case b("ChatSidebarDropdownConstants").CLOSE_ALL_TABS:b("FantaTabActions").closeAllTabs();this.$3(a,!1);break;case b("ChatSidebarDropdownConstants").HIDE_GROUPS:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").TOGGLE_DISCOVER_BOTS:i&&i.saveSettings({isHidden:!this.state.isDiscoverBotsHidden});break;case b("ChatSidebarDropdownConstants").SIDEBAR:this.props.onToggleSidebar();d=!1;break;case b("ChatSidebarDropdownConstants").ONLINE:this.$7();this.state.isOnline?this.$3(a,!0):b("ChatVisibility").goOnline();break;case b("ChatSidebarDropdownConstants").VIDEOCALL_ON:b("FBRTCCallBlockingStore").turnOnVideoCalling();break;case b("ChatSidebarDropdownConstants").VIDEOCALL_OFF:break;case b("ChatSidebarDropdownConstants").PAUSE:break;case b("ChatSidebarDropdownConstants").SHOW_TICKER:b("Arbiter").inform("ChatSidebarDropdown/openTicker");break;case b("ChatSidebarDropdownConstants").HIDE_TICKER:b("Arbiter").inform("ChatSidebarDropdown/closeTicker");break;case b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT:b("ConversationNubUtils").turnConversationsOff();break;case b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT:b("ConversationNubUtils").turnConversationsOn();break;case b("ChatSidebarDropdownConstants").SHOW_APPS:b("AppsDivebarDisplayController").showApps();break;case b("ChatSidebarDropdownConstants").HIDE_APPS:b("AppsDivebarDisplayController").hideApps();break;case b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").HIDE_MARKETPLACE:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").HIDE_BUSINESSES:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS:this.$4(a,c);break}d&&this.refs.menu&&this.refs.menu.hidePopover()};d.$9=function(){return b("React").createElement(k,{value:b("ChatSidebarDropdownConstants").SOUND,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").SOUND)},h._("Chat Sounds"))};d.$10=function(){var a=b("XChatEmojiSettingsController").getURIBuilder().getURI();return b("React").createElement(m,{href:a,rel:"dialog",value:b("ChatSidebarDropdownConstants").EMOJI_SETTINGS},h._("Emoji"))};d.$11=function(){return b("CurrentUser").isWorkUser()?null:b("React").createElement(m,{href:new(b("URI"))("/settings?tab=blocking"),value:b("ChatSidebarDropdownConstants").BLOCK_SETTINGS},h._("Block Settings"))};d.$12=function(){return b("React").createElement(m,{value:b("ChatSidebarDropdownConstants").LOWER_ALL_TABS},h._("Collapse All Chat Tabs"))};d.$13=function(){return b("React").createElement(m,{value:b("ChatSidebarDropdownConstants").CLOSE_ALL_TABS},h._("Close All Chat Tabs"))};d.$14=function(){return b("React").createElement(m,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").SIDEBAR},h._("Hide Sidebar"))};d.$15=function(){return this.props.sidebarType===b("SidebarType").BUDDYLIST_NUB||!b("ChatConfig").get("show_admined_pages")?null:b("React").createElement(k,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES)},h._("Hide Pages You Manage"))};d.$16=function(){return this.props.sidebarType===b("SidebarType").BUDDYLIST_NUB||!b("ChatConfig").get("show_businesses")?null:b("React").createElement(k,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").HIDE_BUSINESSES,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_BUSINESSES)},h._("Hide Pages to Contact"))};d.$17=function(){return this.props.sidebarType===b("SidebarType").BUDDYLIST_NUB?null:b("React").createElement(k,{value:b("ChatSidebarDropdownConstants").HIDE_GROUPS,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_GROUPS)},h._("Hide Groups"))};d.$18=function(){var a=this,c=b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS);c===void 0&&(c=!1);return b("React").createElement(k,{onClick:function(){return a.$2(!c)},value:b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS,selected:c},h._("Turn Off Chat Tabs"))};d.$19=function(){var a=b("ChatVisibility").isOnline(),c=a?new(b("URI"))("/ajax/chat/privacy/settings_dialog.php").addQueryData("dialog_type","turn_off_dialog"):"#",d="";b("gkx")("678660")?d=a?h._("Turn Off Active Status"):h._("Turn On Active Status"):d=a?h._("Turn Off Chat"):h._("Turn On Chat");var e=a?b("ChatSidebarDropdownConstants").TURN_OFF_DIALOG:b("ChatSidebarDropdownConstants").ONLINE;return b("gkx")("697231")&&this.props.sidebarType===b("SidebarType").BUDDYLIST&&!a?null:b("React").createElement(m,{href:c,rel:a?"dialog":"",value:e},d)};d.$20=function(){var a=this.state.isCallBlocked,c=a?"#":b("XVideoCallOffDialogController").getURIBuilder().getURI(),d=a?h._("Turn On Video\/Voice Calls"):h._("Turn Off Video\/Voice Calls"),e=a?b("ChatSidebarDropdownConstants").VIDEOCALL_ON:b("ChatSidebarDropdownConstants").VIDEOCALL_OFF;return b("React").createElement(m,{href:c,rel:a?"":"dialog",value:e},d)};d.$21=function(){var a=j?j.getState().bots:[];if(!i||a.length===0)return null;a=this.state.isDiscoverBotsHidden?h._("Show Bot Discovery"):h._("Hide Bot Discovery");return b("React").createElement(m,{value:b("ChatSidebarDropdownConstants").TOGGLE_DISCOVER_BOTS},a)};d.$22=function(){if(!b("PinnedConversationNubsConfig").userSettingsIsEnabled)return null;var a=this.state.isConversationsEnabled,c=a?h._("Turn Off Post Tabs"):h._("Turn On Post Tabs");a=a?b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT:b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT;return b("React").createElement(m,{value:a},c)};d.$23=function(){if(!b("ChatConfig").get("has_apps_option")||this.props.sidebarType!==b("SidebarType").SIDEBAR)return null;var a=this.state.appsVisible,c=a?h._("Hide Games"):h._("Show Games");a=a?b("ChatSidebarDropdownConstants").HIDE_APPS:b("ChatSidebarDropdownConstants").SHOW_APPS;return[b("React").createElement(m,{value:a,key:"apps_menu"},c)]};d.$24=function(){var a=this.props.sidebarType===b("SidebarType").SIDEBAR,c=b("ChatConfig").get("has_apps_option")&&a;a=a&&b("qex")._("690094");return c||a?b("React").createElement(b("MenuSeparator.react"),{key:"extras_separator"}):null};d.$25=function(){if(this.props.sidebarType!==b("SidebarType").SIDEBAR||!b("qex")._("690094"))return null;var a=b("ChatSidebarDropdownConstants").HIDE_MARKETPLACE;return[b("React").createElement(k,{value:a,selected:b("ChatOptions").getSetting(a),key:"marketplace_menu"},h._("Hide Marketplace"))]};d.$26=function(){return b("React").createElement(l,{className:"fbChatSidebarDropdown/PopoverMenu",multiple:!0,onItemClick:this.$8},this.$9(),this.$10(),this.$11(),b("React").createElement(b("MenuSeparator.react"),null),this.$12(),this.$13(),this.$21(),this.$14(),this.$15(),this.$16(),this.$17(),this.$18(),this.$19(),this.$20(),this.$22(),this.$24(),this.$23(),this.$25())};d.render=function(){var a=h._("Options"),c=b("joinClasses")(this.props.className,"_5qth _5vm9"+(b("ChatVisibility").isOnline()?"":" _5vma")),d=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.DROPDOWN_BUTTON);return b("React").createElement(b("PopoverMenu.react"),{alignh:"right",alignv:"top",className:c,layerBehaviors:[b("ContextualLayerAutoFlip"),b("ContextualDialogArrow"),b("LayerHideOnBlur")],menu:this.$26(),onHide:this.props.onHide,onShow:this.$27,ref:"menu"},b("React").createElement(b("Link.react"),{"aria-label":a,className:"_5vmb button","data-ft":d,"data-hover":"tooltip","data-tooltip-content":a,"data-tooltip-position":"below",href:"#"}))};d.$7=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.appendActionWithTag("WWW_PRESENCE_FUNNEL","sidebar_dropdown_turn_on_chat",b("PresencePrivacy").getOnlinePolicyStr()),a.endFunnel("WWW_PRESENCE_FUNNEL")},"ChatSidebarDropdown.react")};d.$6=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.appendActionWithTag("WWW_PRESENCE_FUNNEL","open_privacy_dialog",b("PresencePrivacy").getOnlinePolicyStr())},"ChatSidebarDropdown.react")};return c}(b("React").PureComponent);a.defaultProps={className:"",onHide:b("emptyFunction"),onShow:b("emptyFunction")};e.exports=a}),null);
__d("ChatSidebarGroupCreateButtonReactComponent",["ChatSidebarGroupCreateButtonReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("ChatSidebarGroupCreateButtonReact.bs").make;e.exports=a}),null);
__d("ChatTypeaheadWrapper.react",["cx","Arbiter","Bootloader","ChatOpenTabEventLogger","ChatSidebarActions","ChatSidebarComposeLink.react","ChatSidebarDropdown.react","ChatSidebarGroupCreateButtonReact.bs","ChatSidebarSections","ChatSidebarSheet.react","ChatTypeaheadConstants","FantaTabActions","MercuryIDs","MercuryParticipantTypes","MessengerConfig","MessengerDiscoveryEntryPoint","MessengerSearchTypeahead.react","React","SidebarType","WorkSMBHelpSidebar","emptyFunction","getActiveElement","gkx","ifRequired"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("WorkSMBHelpSidebar").module,i=40;function j(a){b("Arbiter").inform("sidebar/typeahead/active",a)}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={height:0,value:c.getInitialQueryString(),isSearching:!!c.getInitialQueryString()},c.$1=function(){c.setState({isSearching:!1,value:""})},c.$2=function(a){a&&c.setState({isSearching:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.getInitialQueryString=function(){var a="";b("gkx")("678264")&&b("ifRequired")("ChatTypeaheadCore",function(b){a=b.getLastSearchQuery()});return a?a:""};d.componentDidMount=function(){var a=this;b("gkx")("678264")&&(b("ifRequired")("ChatTypeaheadCore",function(a){a.processInteractionsQueue()}),this.getInitialQueryString()!==""&&j(!0));this.props.isSidebar?b("Arbiter").subscribe("sidebar/resized",function(b,c){a.setState({height:c})}):b("Arbiter").subscribe("buddyList/resized",function(b,c){a.setState({height:c})})};d.UNSAFE_componentWillUpdate=function(a,b){b.isSearching!==this.state.isSearching&&j(b.isSearching)};d.render=function(){__p&&__p();var a=this,c=this.state.height!=null?Math.floor((this.state.height-i*2)/i):null;return b("React").createElement("div",{id:"chatsearch"},!this.state.isSearching&&h&&b("React").createElement(h,null),b("gkx")("678264")?null:b("React").createElement(b("ChatSidebarSheet.react"),{className:"fbChatSidebarMessage",viewer:this.props.id,isSidebar:this.props.isSidebar}),b("React").createElement(b("MessengerSearchTypeahead.react"),{className:"_62it",isFacebookChat:!0,isFocused:!0,maxEntries:c,queryString:this.state.value,viewer:this.props.id,onBlur:this.$1,onChange:function(c){var d=c.target.value;b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(a){a.logQueryChanged(d)},"ChatTypeaheadWrapper.react");a.setState({isSearching:d!==""||b("MessengerConfig").NSDB===!0,value:d})},onClear:b("emptyFunction"),onFocus:this.$2,onScrollIntoView:b("emptyFunction"),onSelect:function(c,d){__p&&__p();var e=b("getActiveElement")();e&&e.blur();if(d===b("ChatTypeaheadConstants").MEETING_ROOM_PAGE_TYPE)b("Bootloader").loadModules(["goURI"],function(d){a.setState({isSearching:!1,value:""});var e=b("MercuryIDs").getUserIDFromThreadID(c);d("/"+(e||""))},"ChatTypeaheadWrapper.react");else{b("FantaTabActions").openTab(c,[b("MessengerDiscoveryEntryPoint").FB_SEARCH_CHAT_SIDEBAR_TYPEAHEAD]);e=null;(!d||d===b("MercuryParticipantTypes").FRIEND||d===b("ChatTypeaheadConstants").FRIEND_TYPE||d===b("ChatTypeaheadConstants").PAGE_TYPE||d===b("ChatTypeaheadConstants").USER_TYPE)&&(b("MercuryIDs").isValidThreadID(c)&&(e=b("MercuryIDs").getUserIDFromThreadID(c)));b("ChatOpenTabEventLogger").logClickOpen(b("ChatSidebarSections").TYPEAHEAD,c,e)}}}),this.props.isSidebar?b("React").createElement("div",{className:"_531b"},b("React").createElement(b("ChatSidebarDropdown.react"),{sidebarType:b("SidebarType").SIDEBAR,onToggleSidebar:b("ChatSidebarActions").disable}),b("React").createElement(b("ChatSidebarComposeLink.react"),{className:"_3a-4 _5q85"}),b("React").createElement(b("ChatSidebarGroupCreateButtonReact.bs").make,{viewer:this.props.id})):null)};return c}(b("React").Component);e.exports=a}),null);
__d("UFIReactionsAnimatedLikeActionIcon.react",["Keyframes.react","React","UFIReactionsKeyframesAssets"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("Keyframes.react"),babelHelpers["extends"]({projectName:"feedback_reactions",assetName:"like_action",source:b("UFIReactionsKeyframesAssets").likeAction,width:36,playing:!0,repeatCount:1},this.props))};return c}(b("React").Component);e.exports=a}),null);