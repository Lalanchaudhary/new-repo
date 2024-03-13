import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Output from './Component/Output'
import Input from './Component/Input'
import Crousel from './Component/Crousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSec from './Component/HeroSec'
function App() {
  let [data1, setData1] = useState(
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
      number: 4532,
      image: "https://www.yamaha-motor-india.com/theme/v3/image/r15v3/color/color_01.png"
    },
    {
      name: "BMW",
      product: "bike",
      number: 4538,
      image: "https://i.pinimg.com/originals/ae/59/f8/ae59f897f31cc5b814efc639ca7e5a35.png"
    }
    ])

  let data2 =
    [{
      name: "Thar",
      product: "Car",
      number: 7842,
      image: "https://th.bing.com/th/id/OIP.YyDFIp2Eo0F3ne0JHpoqiAHaEK?rs=1&pid=ImgDetMain"
    },
    {
      name: "Scorpio",
      product: "car",
      number: 1134,
      image: "https://th.bing.com/th/id/R.1c129dc70c41fdf21430a2c03b52a070?rik=VbhMphzQKIsM3w&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f2%2fBlack-Scorpio-Background-PNG-Image.png&ehk=rlAt0Knx5zgpPj%2fJ%2bnDC7n%2frEHDRbD9zuzLQQ%2fxFxCY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "BMW",
      product: "car",
      number: 4533,
      image: "https://purepng.com/public/uploads/large/purepng.com-bmw-m2-coupe-white-carcarbmwvehicletransport-961524661319jbnkh.png"
    },
    {
      name: "Ferrari",
      product: "car ",
      number: 4539,
      image: "https://th.bing.com/th/id/R.632bf453de4ff1ff6d65b0216f1831e6?rik=gSL66uQhM2wR5Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fferrari-png-ferrari-sergio-png-picture-2256.png&ehk=xiZuIbzhfF%2bYm7MLIEeLUSXh9hr3j%2fQB9avLSKh%2b6GQ%3d&risl=&pid=ImgRaw&r=0"
    }
    ]


  const AddData = (ev) => {
    setData1([...data1, ev])
  }


  const Remove = (number1) => {
    data1 = data1.filter((e) => {
      return e.number !== number1;
    })
    setData1(data1);
    console.log(number1);
  }

  // const UpdateData = (row) => {
  //   data1 = data1.filter((e) => {
  //     return e.number !== row.number;
  //   })
  //   setData1([...data1,row]);
  //   console.log(row);
  // }

  const UpdateData = (row) => {
    const updatedItems = data1.map((item) => {
      if (item.number == row.number) {
        return { ...item, name:row.name,product:row.product,image:row.image }; // Update the name of the item with the matching number
      }
      return item;
    });
  
    setData1(updatedItems);
  };
  return (
    <>
      <Navbar />
      <HeroSec/>
      {/* <Crousel />  */}

      <h2 className='heading'>Bikes</h2>
  
      <div className='main-div' >
        {
          data1.map((e) => {
            return <Output key={e.number} data={e} action={Remove} />
          })
        }
      </div>

      <h2 className='heading'>Cars</h2>
      <div className='main-div'>
        {
          data2.map((e) => {
            return <Output data={e} key={e.number} action={Remove}/>
          })
        }
      </div>
      <Input action={AddData} action2={UpdateData} />

    </>
  )
}

export default App
