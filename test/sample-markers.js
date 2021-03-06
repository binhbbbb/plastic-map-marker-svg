import '../plastic-map-marker-set.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<plastic-map-marker-set name="sample-markers">
    <svg>
        <defs>
            <g id="boxedcircle" viewBox="0 0 24 24">
                <rect x="12" y="0" width="12" height="24"></rect>
                <circle cx="12" cy="12" r="12"></circle>
            </g>
            <g id="flag" viewBox="0 0 32 48">
                <path d="M 1.087 15.462 L 12.419 53.343 L 15.605 51.521 L 4.273 13.638 L 1.087 15.462 Z 
                 M 25.973 12.717 C 25.973 12.717 21.447 21.281 14.752 12.024 L 14.752 12.04 
                 C 9.979 5.267 5.83 12.973 5.83 12.973 L 12.55 35.288 C 12.55 35.288 15.341 24.327 23.771 35.981 
                 L 23.771 35.964 C 28.546 42.739 32.692 35.032 32.692 35.032 L 25.973 12.717 Z" style="fill: [[color]];"></path>
                <text x="12" y="27" fill="[[tcolor]]" style="font-family: Verdana; font-size: 9px; font-weight: bold;">[[mtext]]</text>
    </g></defs></svg>
    
    
    
</plastic-map-marker-set>`;

document.head.appendChild($_documentContainer.content);
