(function() {
    //<span class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-master-branch="develop" data-ref="feature/bug66957">
    var elements = document.querySelectorAll('span.select-menu-button[data-ref*="feature/"]');

    //http://srv5/Home/Branch?id=feature%2Fbug66957
    var linkToBuild = 'http://srv5/Home/Branch?id=';

    //http://plan.tpondemand.com/entity/66957
    var linkToPlan = 'http://plan.tpondemand.com/entity/';

    var linkStart = '<a class="pull-request-link" target="_blank" href="';

    for (var i = 0; i < elements.length; i++) {
        var /**HTMLElement*/element = elements[i],
            branchName = element.dataset.ref || '',
            entityNumber = branchName.replace(/^feature\/\D+/, '');

        var links = [];
        links.push(linkStart + linkToBuild + branchName.replace('/', '%2F') +
            '" title="View build status on SRV5">SRV5</a> ');
        links.push(linkStart + linkToPlan + entityNumber +
            '" title="View entity #' + entityNumber + '">Plan</a> ');

        var container = document.createElement('span');
        container.innerHTML = links.join('');

        var place = element.parentElement;
        place.parentElement.insertBefore(container, place);
    }
}());
