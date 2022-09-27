/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

/****************************************************************************
 * SECTION: ENABLE IMPERVIOUS-SPECIFIC PREFS                                  *
 ****************************************************************************/

/** UPDATES ***/
// The time interval between checks for a new version (in seconds)
pref("app.update.interval", 86400); // 24 hours
// Give the user x seconds to react before showing the big UI. default=24 hours
pref("app.update.promptWaitTime", 86400);
// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "https://www.impervious.ai/");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "https://www.impervious.ai/");
// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 63);
// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

/** VARIOUS ***/
// Fetch shavar updates from endpoint
// pref("browser.safebrowsing.provider.mozilla.updateURL", "https://example.com/");

// UA compat mode - Adds Firefox/VER to the UA string in addition to the APP_NAME.
pref("general.useragent.compatMode.firefox", true);

// Support and feedback URLs
pref("app.support.baseURL", "https://impervious.ai/");
pref("app.feedback.baseURL", "https://impervious.ai/");

// Override settings server
// pref("services.settings.server", "https://impervious.ai/settings/v1");

/****************************************************************************
 * SECTION: DISABLE MOZILLA FIREFOX-SPECIFIC PREFS                          *
 ****************************************************************************/

// Nimbus
// pref("messaging-system.rsexperimentloader.enabled", false);
pref("browser.privatebrowsing.promoEnabled", false);

/** HOMEPAGE ***/
// pref("startup.homepage_override_url", "https://www.startpage.com/");
// pref("startup.homepage_welcome_url", "https://www.startpage.com/");
pref("browser.startup.homepage", "http://127.0.0.1:8080/");
pref("startup.homepage_welcome_url", "http://127.0.0.1:8080/");
// pref("startup.homepage_welcome_url.additional", "");
// pref("browser.aboutwelcome.enabled", false);

/****************************************************************************
 * BetterFox                                                                *
 * "Ad meliora."                                                            *
 * version: January 2022                                                    *
 * url: https://github.com/yokoffing/Better-Fox                             *
 * license: https://github.com/yokoffing/Better-Fox/blob/master/LICENSE     *
 * README: https://github.com/yokoffing/Better-Fox/blob/master/README.md    *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
pref("browser.startup.preXulSkeletonUI", false);
pref("browser.startup.homepage.abouthome_cache.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
pref("browser.contentblocking.category", "strict");
pref("privacy.trackingprotection.lower_network_priority", true);
pref("privacy.partition.network_state.ocsp_cache", true);
pref("privacy.partition.serviceWorkers", true);
pref("beacon.enabled", false);
pref("dom.battery.enabled", false);

/** OCSP & CERTS / HPKP ***/
pref("security.OCSP.enabled", 0);
pref("security.pki.sha1_enforcement_level", 1);
pref("security.cert_pinning.enforcement_level", 2);
pref("security.pki.crlite_mode", 2);
pref("security.remote_settings.crlite_filters.enabled", true);

/** SSL / TLS ***/
pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
pref("browser.xul.error_pages.expert_bad_cert", true);
pref("browser.ssl_override_behavior", 1);
pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
pref("browser.cache.disk.enable", false);
pref("browser.privatebrowsing.forceMediaMemoryCache", true);
pref("media.memory_cache_max_size", 65536);
pref("browser.sessionstore.privacy_level", 2);
pref("browser.shell.shortcutFavicons", false);
pref("browser.pagethumbnails.capturing_disabled", true);
pref("network.cookie.thirdparty.sessionOnly", true);
pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

/** CLEARING DATA DEFAULTS ***/
pref("privacy.cpd.history", true);
pref("privacy.cpd.formdata", true);
pref("privacy.cpd.offlineApps", true);
pref("privacy.cpd.cache", true);
pref("privacy.cpd.cookies", true);
pref("privacy.cpd.sessions", true);
pref("privacy.cpd.siteSettings", false);
pref("privacy.sanitize.timeSpan", 0);
pref("privacy.history.custom", true);

/** SPECULATIVE CONNECTIONS ***/
pref("network.predictor.enabled", false);
pref("network.predictor.enable-prefetch", false);
pref("network.dns.disablePrefetch", true);
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("network.prefetch-next", false);
pref("network.http.speculative-parallel-limit", 0);
pref("network.preload", false);

/** SEARCH / URL BAR ***/
pref("browser.search.separatePrivateDefault", true);
pref("browser.search.separatePrivateDefault.ui.enabled", true);
pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
pref("browser.urlbar.groupLabels.enabled", false);
pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
pref("browser.fixup.alternate.enabled", false);
pref("security.insecure_connection_text.enabled", true);
pref("security.insecure_connection_text.pbmode.enabled", true);
pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
pref("dom.security.https_first", true);

/** HTTPS-ONLY MODE ***/
pref("dom.security.https_only_mode_pbm", true);
pref("dom.security.https_only_mode_ever_enabled_pbm", true);
pref("dom.security.https_only_mode_send_http_background_request", false);

/** DNS-over-HTTPS (DOH) ***/
pref("network.dns.skipTRR-when-parental-control-enabled", false);

/** PASSWORDS AND AUTOFILL ***/
pref("signon.autofillForms.http", false);
pref("security.insecure_field_warning.contextual.enabled", true);
pref("signon.privateBrowsingCapture.enabled", false);
/* NOTE: Remove everything below this line if you use Firefox's password manager */
pref("signon.management.page.breach-alerts.enabled", false);
pref("signon.management.page.breachAlertUrl", "");
pref("browser.contentblocking.report.lockwise.enabled", false);
pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
pref("signon.rememberSignons", false);
pref("signon.rememberSignons.visibilityToggle", false);
pref("signon.schemeUpgrades", false);
pref("signon.showAutoCompleteFooter", false);
pref("signon.autologin.proxy", false);
pref("signon.debug", false);
pref("signon.generation.available", false);
pref("signon.generation.enabled", false);
pref("signon.management.page.fileImport.enabled", false);
pref("signon.importedFromSqlite", false);
pref("signon.recipes.path", "");
pref("signon.autofillForms", false);
pref("signon.autofillForms.autocompleteOff", true);
pref("signon.showAutoCompleteOrigins", false);
pref("signon.storeWhenAutocompleteOff", false);
pref("signon.formlessCapture.enabled", false);
pref("extensions.fxmonitor.enabled", false);

/** ADDRESS + CREDIT CARD MANAGER ***/
pref("extensions.formautofill.addresses.enabled", false);
pref("extensions.formautofill.available", "off");
pref("extensions.formautofill.creditCards.available", false);
pref("extensions.formautofill.creditCards.enabled", false);
pref("extensions.formautofill.heuristics.enabled", false);
pref("browser.formfill.enable", false);

/** MIXED CONTENT + CROSS-SITE ***/
pref("network.auth.subresource-http-auth-allow", 1);
pref("security.mixed_content.upgrade_display_content", true);
pref("pdfjs.enableScripting", false);
pref("extensions.postDownloadThirdPartyPrompt", false);
pref("permissions.delegation.enabled", false);

/** HEADERS / REFERERS ***/
pref("network.http.referer.defaultPolicy.trackers", 1);
pref("network.http.referer.defaultPolicy.trackers.pbmode", 1);
pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** GOOGLE SAFE BROWSING ***/
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "");
/* WARNING: Be sure to have alternate security measures if you disable Safe Browsing! */
/* NOTE: Remove everything below this line if you use this feature */
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

/** MOZILLA ***/
pref("permissions.default.geo", 2);
pref(
  "geo.provider.network.url",
  "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"
);
pref("geo.provider.ms-windows-location", false); /* WINDOWS */
pref("geo.provider.use_corelocation", false); /* MAC */
pref("geo.provider.use_gpsd", false); /* LINUX */
pref("browser.region.network.url", "");
pref("browser.region.update.enabled", false);

/** TELEMETRY ***/
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "data:,");
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("corroborator.enabled", false);
pref("toolkit.telemetry.coverage.opt-out", true);
pref("toolkit.coverage.opt-out", true);
pref("toolkit.coverage.endpoint.base", "");
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("app.shield.optoutstudies.enabled", false);
pref("browser.discovery.enabled", false);
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("default-browser-agent.enabled", false);
pref("extensions.abuseReport.enabled", false);
pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");
pref("browser.ping-centre.telemetry", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/

/** MOZILLA UI ***/
pref("layout.css.prefers-color-scheme.content-override", 2);
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
pref("browser.privatebrowsing.vpnpromourl", "");
pref("extensions.getAddons.showPane", false);
pref("extensions.htmlaboutaddons.recommendations.enabled", false);
pref("browser.shell.checkDefaultBrowser", false);
pref("browser.aboutwelcome.enabled", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false
);

/** WARNINGS ***/
pref("browser.tabs.warnOnClose", false);
pref("browser.tabs.warnOnCloseOtherTabs", false);
pref("browser.tabs.warnOnOpen", false);
pref("browser.aboutConfig.showWarning", false);

/** FULLSCREEN ***/
pref("full-screen-api.transition-duration.enter", "0 0");
pref("full-screen-api.transition-duration.leave", "0 0");
pref("full-screen-api.warning.delay", -1);
pref("full-screen-api.warning.timeout", -1);

/** NEW TAB PAGE ***/
pref("browser.startup.page", 1);
pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.topsites", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
pref(
  "browser.newtabpage.activity-stream.section.highlights.includeBookmarks",
  false
);
pref(
  "browser.newtabpage.activity-stream.section.highlights.includeDownloads",
  false
);
pref(
  "browser.newtabpage.activity-stream.section.highlights.includePocket",
  false
);
pref(
  "browser.newtabpage.activity-stream.section.highlights.includeVisited",
  false
);
pref("browser.startup.homepage_override.mstone", "ignore");
pref("browser.messaging-system.whatsNewPanel.enabled", false);

/*** POCKET ***/
pref("extensions.pocket.enabled", false);
pref("extensions.pocket.api", " ");
pref("extensions.pocket.oAuthConsumerKey", " ");
pref("extensions.pocket.site", " ");

/** DOWNLOADS ***/
pref("browser.download.useDownloadDir", false);
pref("browser.download.alwaysOpenPanel", false);
pref("browser.download.manager.addToRecentDocs", false);

/** VARIOUS ***/
pref("browser.compactmode.show", true);
pref("browser.menu.showViewImageInfo", true);
pref("browser.urlbar.suggest.engines", false);
pref("browser.urlbar.suggest.topsites", false);
pref("permissions.default.desktop-notification", 2);
pref("dom.push.enabled", false);
pref("findbar.highlightAll", true);
pref("layout.spellcheckDefault", 2);
pref("accessibility.force_disabled", 1);
pref("browser.bookmarks.max_backups", 2);
pref("browser.display.show_image_placeholders", false);
pref("view_source.wrap_long_lines", true);
pref("devtools.debugger.ui.editor-wrapping", true);
pref("layout.css.constructable-stylesheets.enabled", true);
pref("layout.css.grid-template-masonry-value.enabled", true);

/** TAB BEHAVIOR ***/
pref("dom.disable_window_move_resize", true);
pref("browser.tabs.loadBookmarksInTabs", true);
pref("browser.bookmarks.openInTabClosesMenu", false);
pref("image.jxl.enabled", true);
pref("editor.truncate_user_pastes", false);
pref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);
pref("clipboard.plainTextOnly", true);
pref("dom.popup_allowed_events", "click dblclick");

// Hide toolbar visibility
pref("browser.toolbars.bookmarks.visibility", "never");

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/

/** EDGE-LIKE SMOOTH SCROLLING ***/
/* Uncomment to enable */
// pref("general.smoothScroll", true);
// pref("general.smoothScroll.currentVelocityWeighting", "0.1");
// pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
// pref("general.smoothScroll.mouseWheel.durationMinMS", 125);
// pref("general.smoothScroll.stopDecelerationWeighting", "0.7");
// pref("mousewheel.min_line_scroll_amount", 25);
// pref("apz.overscroll.enabled", true); /*elastic overscroll*/

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
/** Enter your personal prefs below this line ***/

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/
