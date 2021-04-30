const { Mongoose } = require('mongoose');
const db = require('../models');

const cars = [
    {
        manufacturer: "Ford",
        country: "USA",
        model: "Mustang",
        year: "1965",
        img: "https://cdn.dealeraccelerate.com/cam/34/1878/78332/1920x1440/1965-ford-mustang-coupe"
    },
    {
        manufacturer: "Ford",
        country: "USA",
        model: "GT",
        year: "2020",
        img: "https://www.motortrend.com/uploads/sites/5/2016/12/2017-Ford-GT-front-three-quarters-in-motion-e1481056835424.jpg?fit=around%7C875:492"

    },
    {
        manufacturer: "Dodge",
        country: "USA",
        model: "Challenger",
        year: "2019",
        imdb: "https://www.americanmusclecarmuseum.com/files/cars/2019-dodge-challenger-srt-redeye-2.jpg"
    },
    {
        manufacturer: "Lamborghini",
        country: "Italy",
        model: "Countach",
        year: "1980",
        imdb: "https://blog.dupontregistry.com/wp-content/uploads/2019/05/1989countach-red-2.jpg"
    },

    {
        manufacturer: "Lamborghini",
        country: "Italy",
        model: "Huracan EVO",
        year: "2020",
        img: "https://s1.cdn.autoevolution.com/images/news/lamborghini-production-stops-over-coronavirus-woes-141817_1.jpg"

    },
    {
        manufacturer: "Audi",
        country: "Germany",
        model: "R8",
        year: "2015",
        img: "https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2018/10/Facelift-Audi-R8-V10-gear-patrol-lead-feature.jpg"
    },
    {
        manufacturer: "BMW",
        country: "Germany",
        model: "M4",
        year: "2018",
        img: "https://cdn.motor1.com/images/mgl/RPrgg/s3/bmw-m4-competition-kith-design-study-edition-lead-image.jpg"
    },
    {
        manufacturer: "BMW",
        country: "Germany",
        model: "840i Gran Coupe",
        year: "2020",
        img: "https://www.carscoops.com/wp-content/uploads/2019/09/9342ded0-2020-bmw-840i-gran-coupe%CC%81-euro-spec-85-1024x682.jpg"
    },

    {
        manufacturer: "Mercedes-Benz",
        country: "Germany",
        model: "C63 AMG Coupe",
        year: "2020",
        img: "http://www.driversmagazine.com/wp-content/uploads/2018/02/mercedes-amg-c63-coupe-cabriolet-vath-tuning-11.jpg"
    },

    {
        manufacturer: "Porsche",
        country: "Germany",
        model: "911",
        year: "2020",
        img: "https://s1.cdn.autoevolution.com/images/news/gallery/2020-porsche-911-carrera-s-configurator-goes-live-pricing-starts-at-113300_5.jpg"
    },
    {
        manufacturer: "Jaguar",
        country: "UK",
        model: "XF",
        year: "2020",
        img: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-10/1a1ee5e0-0776-11eb-aefd-b8dd1f37f0b1"
    },
    {
        manufacturer: "Aston Martin",
        country: "UK",
        model: "Vantage",
        year: "2020",
        img: "https://www.motortrend.com/uploads/sites/5/2019/10/2020-Aston-Martin-Vantage-AMR-Manual-6.jpg?fit=around%7C875:492.1875"
    },

    {
        manufacturer: "Bentley",
        country: "UK",
        model: "Continential GT",
        year: "2017",
        img: "https://www.bentleypalmyra.com/galleria_images/3772/3772_p2_l.jpg"
    },

    {
        manufacturer: "Rolls Royce",
        country: "UK",
        model: "Phantom",
        year: "2020",
        img: "https://i.gaw.to/vehicles/photos/40/21/402187-2020-rolls-royce-phantom.jpg"
    },
    {
        manufacturer: "Chevrolet",
        country: "USA",
        model: "Corvette",
        year: "1975",
        img: "https://dealeraccelerate-all.s3.amazonaws.com/hip/images/1/0/6/106/5087f3a3eac8_hd_1975-chevrolet-corvette.jpg"
    },
    {
        manufacturer: "Honda",
        country: "Japan",
        model: "NSX",
        year: "1994",
        img: "http://1.bp.blogspot.com/-MTRpzwVH_6s/UAOOAQuMEsI/AAAAAAAADtA/S6skpJU206k/s1600/IMG_2768.JPG"
    },
    {
        manufacturer: "Nissan",
        country: "Japan",
        model: "Skyline GTR",
        year: "1994",
        img: "https://www.rightdriveusa.com/wp-content/uploads/2015/08/nissan-skyline-gtr-r32-v-spec-for-sale-1.jpg"
    },
    {
        manufacturer: "Toyota",
        country: "Japan",
        model: "Supra",
        year: "1992",
        img: "https://ccmarketplace.azureedge.net/cc-temp/listing/109/1104/11879650-1992-toyota-supra-std.jpg"
    },
    {
        manufacturer: "Chevrolet",
        country: "USA",
        model: "Camaro",
        year: "1968",
        img: "https://d2culxnxbccemt.cloudfront.net/car/content/uploads/2017/06/26163438/1968-Camaro-LEAD.jpg"
    },
    {
        manufacturer: "Porsche",
        country: "Germany",
        model: "993",
        year: "1994",
        img: "https://uploads.carandclassic.co.uk/uploads/cars/porsche/12338389.jpg"
    },
    {
        manufacturer: "Chevrolet",
        country: "USA",
        model: "Bel Air",
        year: "1955",
        img: "https://ccpublic.blob.core.windows.net/cc-temp/listing/96/3273/6315445-1955-chevrolet-bel-air-std-c.jpg"
    },
    {
        manufacturer: "Ford",
        country: "USA",
        model: "Customline",
        year: "1954",
        img: "https://dealeraccelerate-all.s3.amazonaws.com/gaa/images/1/1/5/6/4/11564/8754_165.jpg"
    },
    {
        manufacturer: "Chevrolet",
        country: "USA",
        model: "z28 Iroc Camaro",
        year: "1978",
        img: "https://i.pinimg.com/originals/05/bb/08/05bb0832b37ac232988428fdfabbf0c5.jpg"
    },
    {
        manufacturer: "Buick",
        country: "USA",
        model: "Lesabre",
        year: "1960",
        img: "https://www.gullwingmotorcars.com/galleria_images/3343/3343_main_l.jpg"
    },
    {
        manufacturer: "Lincoln",
        country: "USA",
        model: "Continental",
        year: "1972",
        img: "http://classiccardb.com/uploads/postfotos/1972-lincoln-continental-low-low-mileage-21000-spanking-clean-4.JPG"
    },
    {
        manufacturer: "Jaguar",
        country: "UK",
        model: "XKE",
        year: "1964",
        img: "https://cdn.barrett-jackson.com/staging/carlist/items/Fullsize/Cars/88880/88880_Front_3-4_Web.jpg"
    },
    {
        manufacturer: "Mercedes-Benz",
        country: "Germany",
        model: "250 SE",
        year: "1966",
        img: "https://www.ccsmotors.com/imagetag/162/13/l/Used-1966-Mercedes-Benz-250SE-CONVERTIBLE.jpg"
    },
    {
        manufacturer: "BMW",
        country: "Germany",
        model: "M3",
        year: "1988",
        img: "https://bringatrailer.com/wp-content/uploads/2019/04/1988_bmw_m3_15560481019cc39f3414190415_Larry_Resnik_1988_BMW_E30_M3_USA_XT205502-e1556863689390.jpg"
    },
    {
        manufacturer: "Buick",
        country: "USA",
        model: "Grand National",
        year: "1984",
        img: "https://cdn.barrett-jackson.com/staging/carlist/items/Fullsize/Cars/194306/194306_Front_3-4_Web.jpg"
    },
    {
        manufacturer: "Ford",
        country: "USA",
        model: "Mustang GT",
        year: "1987",
        img: "https://www.jonathanmotorcars.com/imagetag/590/2/l/Used-1987-Ford-Mustang-GT-1544037150.jpg"
    },
    {
        manufacturer: "Toyota",
        country: "Japan",
        model: "MR2",
        year: "1995",
        img: "https://autonetmagz.com/wp-content/uploads/2018/06/toyota-mr2-1995.jpg"
    },
    {
        manufacturer: "Toyota",
        country: "Japan",
        model: "Supra",
        year: "1995",
        img: "https://www.rightdrive.ca/wp-content/uploads/2018/10/1995-Toyota-Supra-3685-7.jpg"
    },
    {
        manufacturer: "Dodge",
        country: "USA",
        model: "Viper",
        year: "1995",
        img: "https://cdn.barrett-jackson.com/staging/carlist/items/Fullsize/Cars/112660/112660_Side_Profile_Web.JPG"
    },
    {
        manufacturer: "Honda",
        country: "Japan",
        model: "S2003",
        year: "2002",
        img: "https://ccnwordpress.blob.core.windows.net/journal/2019/01/14614211-2000-honda-s2000-srcset-retina-md.jpg"
    },
    {
        manufacturer: "Audi",
        country: "Germany",
        model: "RS6",
        year: "2002",
        img: "http://www.dieselstation.com/wallpapers/albums/Audi/RS6%202002/Audi-RS6-009.jpg"
    },
    {
        manufacturer: "Porsche",
        country: "Germany",
        model: "Cayman GT4",
        year: "2016",
        img: "http://ag-spots-2016.o.auroraobjects.eu/2016/08/04/porsche-981-cayman-gt4-c759804082016194901_1.jpg"
    },
    {
        manufacturer: "Jaguar",
        country: "UK",
        model: "XK",
        year: "2012",
        img: "https://st.automobilemag.com/uploads/sites/10/2015/09/2012-jaguar-XKR-S-front-three-quarter.jpg"
    }

];


const run = async () => {
    try {
        await db.Car.deleteMany({});
        const createdCars = await db.Car.insertMany(cars);
        console.log("Seed Finished");
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

run();