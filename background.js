/**
 * Created by liuzheng on 8/9/15.
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.link) {
            var blockLink = localStorage.getItem('blockLink');
            var status = false;
            if (blockLink) {
                var link = JSON.parse(blockLink);
                    link.push(request.link);
                $.unique(link);
                localStorage.setItem('blockLink', JSON.stringify(link));
                status = true;
            } else {
                var link = [request.link];
                localStorage.setItem('blockLink', JSON.stringify(link));
                status = true
            }
            sendResponse({status: status});
        } else if (request.block) {
            var blockLink = localStorage.getItem('blockLink');
            if (blockLink.match('"'+request.block +'"')) {
                sendResponse({status: true})
            } else {
                sendResponse({status: false})

            }

        }

    }
)
