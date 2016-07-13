    define("common/modules/experiments/tests/live-blog-chrome-notifications-internal", ["common/utils/config", "common/utils/detect"], function(e, t) {
        return function() {
            this.id = "LiveBlogChromeNotificationsInternal", this.start = "2016-03-03", this.expiry = "2016-08-31", this.author = "Nathaniel Bennett", this.description = "Allows users to to subscribe to live blogs on chrome - internal users only", this.audience = 0, this.audienceOffset = 0, this.successMeasure = "", this.showForSensitive = !0, this.audienceCriteria = "Internal use only ap", this.dataLinkNames = "", this.idealOutcome = "", this.canRun = function() {
                return "Chrome" === t.getUserAgent.browser && "LiveBlog" === e.page.contentType
            }, this.variants = [{
                id: "control",
                test: function() {}
            }]
        }
    }), define("common/modules/experiments/tests/live-blog-chrome-notifications-prod", ["common/utils/config", "common/utils/detect"], function(e, t) {
        return function() {
            this.id = "LiveBlogChromeNotificationsProd", this.start = "2016-06-08", this.expiry = "2016-08-31", this.author = "Nathaniel Bennett", this.description = "Allows users to to subscribe to live blogs on chrome - separately to internal test so we can run the internal one on prod if need be", this.audience = .1, this.audienceOffset = 0, this.successMeasure = "", this.showForSensitive = !0, this.audienceCriteria = "Chrome users on desktop and androd", this.dataLinkNames = "", this.idealOutcome = "", this.canRun = function() {
                return "Chrome" === t.getUserAgent.browser && "LiveBlog" === e.page.contentType && !t.isIOS()
            }, this.variants = [{
                id: "control",
                test: function() {}
            }, {
                id: "show-notifications",
                test: function() {}
            }]
        }
    }), define("common/modules/experiments/tests/clever-friend-brexit", [], function() {
        return function() {
            this.id = "CleverFriendBrexit", this.start = "2016-05-09", this.expiry = "2016-07-31", this.author = "Anne Byrne", this.description = "Only expose the clever friend embed to 10% of people, by removing it for 90%", this.audience = .9, this.audienceOffset = 0, this.successMeasure = "Not really an a/b test, just using the audience segmentation for a soft launch", this.audienceCriteria = "All users", this.dataLinkNames = "", this.idealOutcome = "", this.canRun = function() {
                return !0
            }, this.variants = [{
                id: "remove-embed",
                test: function() {
                    for (var e = document.querySelectorAll('figure[data-canonical-url^="https://interactive.guim.co.uk/2016/05/brexit-companion/"]'), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
                }
            }]
        }
    }), define("common/modules/experiments/tests/utils/comment-blocker", [], function() {
        var e = {};
        return e.hideComments = function(e) {
            var t = e ? e.split("").reduce(function(e, t) {
                return e + t.charCodeAt(0)
            }, 0) : 2;
            return t % 2 == 0
        }, 
        return function() {
            this.id = "JoinDiscussionAfterPoll", this.start = "2016-06-15", this.expiry = "2016-07-13", this.author = "George Haberis - Participation", this.description = 'Participation - Does "join discussion" message after poll participation increase comments', this.audience = .1, this.audienceOffset = .4, this.successMeasure = "Control - User does not see message, Variant 1 - User sees message", this.audienceCriteria = "Articles which have embeded poll", this.dataLinkNames = "", this.idealOutcome = "We can see at least 50% more participation if message shown", this.canRun = function() {
                return n.isEnhanced() && e.page.commentable && r('figure.element-interactive[data-canonical-url*="interactive.guim.co.uk/participation/poll"]').length > 0
            }, this.variants = [{
                id: "control",
                test: s.bind(this, !0),
                success: o.bind(this)
            }, {
                id: "variant-1",
                test: s.bind(this, !1),
                success: o.bind(this)
            }]
        }
    }), define("common/modules/experiments/tests/hosted-autoplay", [], function() {
        return function() {
            this.id = "HostedAutoplay", this.start = "2016-30-06", this.expiry = "2016-14-07", this.author = "Zofia Korcz", this.description = "An autoplay overlay with the next video on a hosted page.", this.audience = 0, this.audienceOffset = 0, this.successMeasure = "People will either more often click on the next hosted video or wait until end of the current video to be redirected into the next video page url.", this.audienceCriteria = "All users", this.dataLinkNames = "Next video autoplay: Cancel autoplay of the next video, Discover Zoe from Renault, Next Hosted Video Autoplay, Immediately play the next video, Next Hosted Video", this.idealOutcome = "People will either more often click on the next hosted video or wait until end of the current video to be redirected into the next video page url.", this.canRun = function() {
                return !0
            }, this.variants = [{
                id: "control",
                test: function() {}
            }, {
                id: "variant1",
                test: function() {}
            }, {
                id: "variant2",
                test: function() {}
            }]
        }