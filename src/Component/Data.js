import React from 'react'
import './Data.css'
function Data() {
    let data1 =
        [{
            name: "Appache",
            product: "bike",
            number: 7843,
            image: "https://www.tvsmotor.com/pa/-/media/Feature/IB/Panama/160-2V/Web/image/1_160_2V.png?h=360&w=606&la=en&hash=75E9667880A338AA9D0717A120263964"
        },
        {
            name: "Bullet",
            product: "bike",
            number: 1234,
            image: "https://th.bing.com/th/id/R.ad63e996f9961398b9b71e2a4ec55528?rik=IcLFy4iZhrX3Ow&riu=http%3a%2f%2fpngimagesfree.com%2fBike%2fBullet%2fbullet-bike-WHITE-png_pngimagesfree.com.png&ehk=F0%2fM0aeDr8aN%2b%2bSulrO7Z7lvgHV0RhaH%2bPk4VRSJ2As%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "KTM",
            product: "bike",
            number: 4537,
            image: "https://purepng.com/public/uploads/large/purepng.com-ktm-rc-390motorcyclemotorbikebikevehiclehondaktm-981525161914plvyv.png"
        },
        {
            name: "R15",
            product: "bike",
            number: 4537,
            image: "https://www.yamaha-motor-india.com/theme/v3/image/r15v3/color/color_01.png"
        }
            ,
        {
            name: "BMW",
            product: "bike",
            number: 4537,
            image: "https://i.pinimg.com/originals/ae/59/f8/ae59f897f31cc5b814efc639ca7e5a35.png"
        }
        ]

    let data2 =
        [{
            name: "Thar",
            product: "Car",
            number: 7843,
            image: "https://th.bing.com/th/id/OIP.YyDFIp2Eo0F3ne0JHpoqiAHaEK?rs=1&pid=ImgDetMain"
        },
        {
            name: "Scorpio",
            product: "car",
            number: 1234,
            image: "https://th.bing.com/th/id/R.1c129dc70c41fdf21430a2c03b52a070?rik=VbhMphzQKIsM3w&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f2%2fBlack-Scorpio-Background-PNG-Image.png&ehk=rlAt0Knx5zgpPj%2fJ%2bnDC7n%2frEHDRbD9zuzLQQ%2fxFxCY%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "BMW",
            product: "car",
            number: 4537,
            image: "https://purepng.com/public/uploads/large/purepng.com-bmw-m2-coupe-white-carcarbmwvehicletransport-961524661319jbnkh.png"
        },
        {
            name: "Ferrari",
            product: "car ",
            number: 4537,
            image: "https://th.bing.com/th/id/R.632bf453de4ff1ff6d65b0216f1831e6?rik=gSL66uQhM2wR5Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fferrari-png-ferrari-sergio-png-picture-2256.png&ehk=xiZuIbzhfF%2bYm7MLIEeLUSXh9hr3j%2fQB9avLSKh%2b6GQ%3d&risl=&pid=ImgRaw&r=0"
        }
        ]
    return <>
        <h2>Bikes</h2>
        <div className='main-div'>
            {
                data1.map((e) => {
                    return <div className='inner-div'>
                        <img src={e.image} height="200px" alt='bike'></img>
                        <h1>{e.name}</h1>
                        <h4>Product {e.product}</h4>
                        <h4>Vechile No.{e.number}</h4>
                    </div>

                })
            }
        </div>

        <h2>Cars</h2>
        <div className='second-div'>
            {
                data2.map((e) => {
                    return <div className='inner-div'>
                        <img src={e.image} height="200px" alt='bike'></img>
                        <h1>{e.name}</h1>
                        <h4>Product {e.product}</h4>
                        <h4>Vechile No.{e.number}</h4>
                    </div>
                })
            }
        </div>
    </>
}

export default Data