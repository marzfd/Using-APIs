function main() {
  document.getElementById('list').onclick = () => {
    document.getElementById('container').style.transform = 'scale(1)';
  }

  document.getElementById('close').onclick = () => {
    document.getElementById('container').style.transform = 'scale(0)';
  }

  document.getElementById('form').addEventListener('submit', memorizeMarkers);

  function memorizeMarkers(e) {
    e.preventDefault();

    const Name = document.getElementById('WebsiteName').value;
    const URL = document.getElementById('url').value;

    // Check Validation
    if (!Name && !URL) {
      alert('⚠ Please Insert the Site Name and URL !');
      return false;
    }
    else if (!Name) {
      alert('⚠ Please Insert the Site Name !');
      return false;
    }
    else if (!URL) {
      alert('⚠ Please Insert the URL !');
      return false;
    }
    else {
      showCheckMark();
      setTimeout(hideCheckMark, 1000);
    }

    let markers = {
                    SiteName: Name,
                    SiteUrl: URL
                  };

    if (localStorage.getItem('SiteMarkers') === null) {
      const SiteMarkers = [];
      SiteMarkers.push(markers);

      const jsonData = JSON.stringify(SiteMarkers);
      localStorage.setItem('SiteMarkers', jsonData);

    }
    else {
      // Get markedSites from local storage as an object
      let site = JSON.parse(localStorage.getItem('SiteMarkers'));
      site.push(markers);

      let jsonData = JSON.stringify(site);
      localStorage.setItem('SiteMarkers', jsonData);
    }

    displaySites();
    document.getElementById('form').reset();
  }

  function deleteSite(siteUrl) {

    let SiteMarks = JSON.parse(localStorage.getItem('SiteMarkers'));

    for(var i = 0; i < SiteMarks.length; i++) {
      if(SiteMarks[i].SiteUrl == siteUrl) {
        SiteMarks.splice(i, 1)
      }
    }
    // Reset localStorage
    localStorage.setItem('SiteMarkers',JSON.stringify(SiteMarks))

    displaySites();
  }

  function displaySites() {
    let site = JSON.parse(localStorage.getItem('SiteMarkers'));
    let result = document.getElementById('yourSites');

    result.innerHTML = '';

    for (let i = 0; i < site.length; i++) {

      let siteName = site[i].SiteName;
      let siteUrl = site[i].SiteUrl;

      result.innerHTML += `
                          <div id="sites">${siteName}
                              <a href="${siteUrl}" target="_blank">
                                GO
                              </a>
                              <button onclick="${deleteSite(siteUrl)};">Delete</button>
                          </div>
                          `;
    }
  }


  window.onload = displaySites;

  function showCheckMark() {
    document.getElementById('marker').style.display='block';
  }

  function hideCheckMark() {
    document.getElementById('marker').style.display='none';
  }

}

main();