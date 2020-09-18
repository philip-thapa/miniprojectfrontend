import React from 'react'

const ImageHelper = ({product}) => {

    const imageURL = product ? product.image : 'https://lh3.googleusercontent.com/L2gt0IXiehe9Tmp9DU7w-WfTf7zXk9eq9KT2YGz5mBu03T1BWA1mOiFiIUZoGeLSWoBuSvLVIzE8QYT9z3lgOjkckMA-G4Ms1cUJCxUypoQ1WpO1voVXTmJhz_sXdxe8_tAjkSs5L7kDPl10mdJsCznZKGRrCV7nTii21nazHFnmJqtfl7657aF7SfhWbs16REpa5iJRoS1aDliQoUk_PKtkjbwSIcti71i-XNU9DAkrocT96jK_ThIPoMNjRUFoLjip6mET_i1VL4mCQ8tXUz-5UqQAcayl-kXrgn8rZNLV9qg71MBPKkz-PEXKz4V22wyA7G3I7qfa6qM4wjryZrBGmnZIkBh98X0bNKpbQbIqdsgFuQmT0I-1gZj7zcdgU_4HfY8WSxlSwkJIhnM-hcPK0VL9vzBVsl4AsnT-VhoyvcbhYcsHNnarZuiy1vj8HCkmbMFjN8d-tHQFrjOVRsfM4SG1gCOnXooyisTogZ94p8WzXJSQ-WO1xVjsfnORdu5Mo9AyZxdTFpyzPIbNbozMI-R-tYPsFTCxaoalw2FFDJRIsYYt66myO43nKpV8HXbV9FCaZv7KBNmGvOeAKZRQ05ENTLKTPCRTsOLBfyxlniMXFfHBFMqWRyfhdzjkeFU2gfj3WJ5cOAubsASsRyymQu2QQo1OJJk8-jLIYQr1tLFl4ivRSFk9k891bw=w1312-h1400-no?authuser=0'

    return(
        <div className="p-1">
            <img src={imageURL}  
                style={{maxHeight: "100%", maxWidth: "100%"}}
                className="mb-1 rounded"
                alt="Product"
            />
        </div>
    )
}

export default ImageHelper