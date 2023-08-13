import React from "preact/compat";
import PropTypes from "prop-types";


export function Coffee() {
    return (
        <section>
            <h1>Coffee is...</h1>
            <p>a pick me up, its for focus, but for me its also enjoyment.
            </p>

        <h2>Recent Coffee Shops Trip</h2>
        <div>
            {/* </YoutubeEmbed> */}
        </div>
        </section>
    );
}

const YoutubeEmbed = ({ embedId }) => (
<div className="video-responsive">
    <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow= "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
    </div>
);

YoutubeEmbed.propTypes = {
    embedID: PropTypes.string.isRequired
}

export default YoutubeEmbed;