user_pref("_mar.js.parrot", "MAR OVERRIDES STARTED");

user_pref("_mar.searching.js.parrot", "MAR OVERRIDES Searching STARTED");
/* 0801: disable location bar using search
 * Don't leak URL typos to a search engine, give an error message instead
 * Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com"
 * [NOTE] This does not affect explicit user action such as using search buttons in the
 * dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo)
 * [SETUP-CHROME] If you don't, or rarely, type URLs, or you use a default search
 * engine that respects privacy, then you probably don't need this ***/
// MAR CHANGED FROM false TO true
user_pref("keyword.enabled", true);

/* 0804: disable live search suggestions
 * [NOTE] Both must be true for the location bar to work
 * [SETUP-CHROME] Change these if you trust and use a privacy respecting search engine
 * [SETTING] Search>Provide search suggestions | Show search suggestions in address bar results ***/
// MAR CHANGED FROM false TO true
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

/* 5010: disable location bar suggestion types
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest ***/
// MAR UNCOMMENTED the line below
user_pref("browser.urlbar.suggest.history", false);
// MAR UNCOMMENTED the line below
   user_pref("browser.urlbar.suggest.bookmark", false);
// MAR UNCOMMENTED the line below
   user_pref("browser.urlbar.suggest.openpage", false);
// MAR UNCOMMENTED the line below
   user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]

/* 5011: disable location bar dropdown
 * This value controls the total number of entries to appear in the location bar dropdown ***/
   // user_pref("browser.urlbar.maxRichResults", 0);

/* 5012: disable location bar autofill
 * [1] https://support.mozilla.org/kb/address-bar-autocomplete-firefox#w_url-autocomplete ***/
// MAR UNCOMMENTED the line below
   user_pref("browser.urlbar.autoFill", false);

user_pref("_mar.searching.js.parrot", "MAR OVERRIDES Searching FINISHED");


user_pref("_mar.OptSec.js.parrot", "MAR OVERRIDES OptSec STARTED");
/* 0810: disable coloring of visited links
 * [SETUP-HARDEN] Bulk rapid history sniffing was mitigated in 2010 [1][2]. Slower and more expensive
 * redraw timing attacks were largely mitigated in FF77+ [3]. Using RFP (4501) further hampers timing
 * attacks. Don't forget clearing history on close (2803). However, social engineering [2#limits][4][5]
 * and advanced targeted timing attacks could still produce usable results
 * [1] https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector
 * [2] https://dbaron.org/mozilla/visited-privacy
 * [3] https://bugzilla.mozilla.org/1632765
 * [4] https://earthlng.github.io/testpages/visited_links.html (see github wiki APPENDIX A on how to use)
 * [5] https://lcamtuf.blogspot.com/2016/08/css-mix-blend-mode-is-bad-for-keeping.html ***/
// MAR UNCOMMENTED the line below
   user_pref("layout.css.visited_links_enabled", false);

// TODO: FIND GOOD MONITOR SIZES override recipie
/* override-recipe: desktop: alter new window max sizes **/
user_pref("privacy.window.maxInnerWidth", 1600); // 4502
user_pref("privacy.window.maxInnerHeight", 900);

/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
// MAR UNCOMMENTED the line below
   user_pref("signon.rememberSignons", false);

/* 5004: disable permissions manager from writing to disk [FF41+] [RESTART]
 * [NOTE] This means any permission changes are session only
 * [1] https://bugzilla.mozilla.org/967812 ***/
// MAR UNCOMMENTED the line below
   user_pref("permissions.memory_only", true); // [HIDDEN PREF]

/* 5005: disable intermediate certificate caching [FF41+] [RESTART]
 * [NOTE] This affects login/cert/key dbs. The effect is all credentials are session-only.
 * Saved logins and passwords are not available. Reset the pref and restart to return them ***/
// MAR UNCOMMENTED the line below
   user_pref("security.nocertdb", true); // [HIDDEN PREF]

/* 5008: disable resuming session from crash ***/
// MAR UNCOMMENTED the line below
   user_pref("browser.sessionstore.resume_from_crash", false);

/* 5013: disable browsing and download history
 * [NOTE] We also clear history and downloads on exit (2803)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember browsing and download history ***/
// MAR UNCOMMENTED the line below
   user_pref("places.history.enabled", false);

// MAR UNCOMMENTED the line below
user_pref("browser.download.autohideButton", false); // [FF57+]
// MAR UNCOMMENTED the line below AND changed FROM 2 TO 0
user_pref("layout.spellcheckDefault", 0); // 0=none, 1-multi-line, 2=multi-line & single-line

user_pref("_mar.OptSec.js.parrot", "MAR OVERRIDES OptSec FINISHED");

user_pref("_mar.Ux.js.parrot", "MAR OVERRIDES Ux STARTED");
/* UX FEATURES ***/
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New toolbar icon [FF69+]
// MAR UNCOMMENTED the line below
   user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
   // user_pref("extensions.screenshots.disabled", true); // [FF55+]
// MAR UNCOMMENTED the line below
   user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
// MAR UNCOMMENTED the line below AND changed FROM false TO true
   user_pref("reader.parse-on-load.enabled", true); // Reader View
user_pref("_mar.Ux.js.parrot", "MAR OVERRIDES Ux FINISHED");

user_pref("_mar.js.parrot", "MAR OVERRIDES FINISHED");