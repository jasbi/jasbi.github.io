// This file writes the navigation bar HTML into every page that includes it via <script src="nav.js">.
// Using document.write() here means the navbar is inserted exactly where this script tag appears,
// before the rest of the page finishes loading — so there is no flash of missing navigation.

document.write(`<nav class="navbar fixed-top navbar-expand-md navbar-dark bg-faded" style="background: rgb(2,40,81)">

    <!-- Hamburger button: only visible on small screens (phones/tablets).
         Clicking it shows/hides the nav links below. -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible nav links: on large screens these are always visible in a row.
         On small screens they are hidden until the hamburger button is clicked. -->
    <div class="collapse navbar-collapse" id="nav-content">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link nav-bracket" href="research.html">RESEARCH</a></li>
            <li class="nav-item"><a class="nav-link nav-bracket" href="teaching.html">TEACHING</a></li>
            <li class="nav-item"><a class="nav-link nav-bracket" href="service.html">SERVICE</a></li>
            <li class="nav-item"><a class="nav-link nav-bracket" href="jasbi-cv.pdf">CV (PDF)</a></li>
            <!-- target="_blank" makes these external links open in a new browser tab -->
            <li class="nav-item"><a class="nav-link nav-bracket" href="https://l3lab.ucdavis.edu/" target="_blank" rel="noopener">L3 LAB</a></li>
            <li class="nav-item"><a class="nav-link nav-bracket" href="https://bxz9n7-masoud-jasbi.shinyapps.io/childes-function-words/" target="_blank" rel="noopener">FUNCTION WORD DASHBOARD</a></li>
        </ul>
    </div>

    <!-- Home/brand link: absolutely positioned so it sits over the right 25% of the page,
         visually centered above the profile photo column on the home page. -->
    <a class="navbar-brand nav-bracket" href="index.html" style="position:absolute; right:0; width:25%; text-align:center; margin:0; padding:0;">MASOUD JASBI</a>

</nav>`);
