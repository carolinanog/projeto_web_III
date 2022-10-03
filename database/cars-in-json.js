import Car from '../models/carsModel.js';

Car.bulkCreate([
{
    marca: "Chevrolet",
 	modelo: "Cruze LT",
 	ano: 2020,
 	preco: 97000.00,
 	categoria: "sedan",
 	cor: "cinza",
 	cambio: "manual",
 	imagem: "chevrolet_cruze_2020.jpg"
},
{
    marca: "Chevrolet",
 	modelo: "Cruze LT",
 	ano: 2022,
 	preco: 118000.00,
 	categoria: "sedan",
 	cor: "preta",
 	cambio: "manual",
 	imagem: "chevrolet_cruze_lt_2022.jpg"
},
{
    marca: "Chevrolet",
 	modelo: "Montana LS",
 	ano: 2019,
 	preco: 58000.00,
 	categoria: "pick up",
 	cor: "branca",
 	cambio: "manual",
 	imagem: "chevrolet_montana_ls_2019.jpg"
},
{
    marca: "Chevrolet",
 	modelo: "Montana LS",
 	ano: 2019,
 	preco: 58000.00,
 	categoria: "pick up",
 	cor: "branca",
 	cambio: "manual",
 	imagem: "chevrolet_montana_ls_2019.jpg"
},
{
    marca: "Chevrolet",
 	modelo: "Onix LT",
 	ano: 2021,
 	preco: 66000.00,
 	categoria: "hatch",
 	cor: "branca",
 	cambio: "manual",
 	imagem: "chevrolet_onix_lt_2021.jpg"
},
{
    marca: "Chevrolet",
 	modelo: "Montana LS",
 	ano: 2019,
 	preco: 58000.00,
 	categoria: "pick up",
 	cor: "branca",
 	cambio: "manual",
 	imagem: "chevrolet_montana_ls_2019.jpg"
},
{
    marca: "Chevrolet",
 	modelo: "S10 LS",
 	ano: 2022,
 	preco: 223000.00,
 	categoria: "pick up",
 	cor: "prata",
 	cambio: "automático",
 	imagem: "chevrolet_s10_ls_cd_2022.jpg"
},
{
    marca: "Chevrolet", 
    modelo: "Spin", 
    ano: 2018, 
    preco: 63000.00, 
    categoria: "minivan", 
    cor: "cinza", 
    cambio: "manual", 
    imagem: "chevrolet_spin_2018.jpg"
}, 
{
    marca: "Chevrolet", 
    modelo: "Spin", 
    ano: 2019, 
    preco: 72000.00, 
    categoria: "minivan", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "chevrolet_spin_2019.jpg"
    }, 
    {
    marca: "Chevrolet", 
    modelo: "Tracker Premier", 
    ano: 2021, 
    preco: 135000.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "chevrolet_tracker_premier_2021.jpg"
    }, 
    {
    marca: "Fiat", 
    modelo: "Argo", 
    ano: 2021, 
    preco: 65500.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    imagem: "fiat_argo_drive_2021.jpg"
    }, 
    {
    marca: "Fiat",
    modelo: "Doblo", 
    ano: 2019, 
    preco: 74200.00, 
    categoria: "minivan", 
    cor: "prata", 
    cambio: "manual", 
    imagem: "fiat_doblo_2019.jpg"
    },
    {
    marca: "Fiat", 
    modelo: "Doblo", 
    ano: 2020, 
    preco: 78000.00, 
    categoria: "minivan", 
    cor: "prata", 
    cambio: "manual", 
    imagem: "fiat_doblo_2020.jpg"
    }, 
    {
    marca: "Fiat", 
    modelo: "Strada H Working", 
    ano: 2019, 
    preco: 63500.00, 
    categoria: "pick up", 
    cor: "prata", 
    cambio: "manual",
    imagem: "fiat_strada_hard_working_2019.jpg"
    }, 
    {
    marca: "Fiat", 
    modelo: "Toro", 
    ano: 2021, 
    preco: 129000.00, 
    categoria: "pick up", 
    cor: "branca", 
    cambio: "automático",
    imagem: "fiat_toro_endurance_2021.jpg"
    }, 
    {
    marca: "Fiat", 
    modelo: "Uno", 
    ano: 2019, 
    preco: 44300.00, 
    categoria: "hatch",
    cor: "branca", 
    cambio: "manual", 
    imagem: "fiat_uno_2019.jpg"
    }, 
    {
    marca: "Fiat", 
    modelo: "Uno", 
    ano: 2020, 
    preco: 47000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    imagem: "fiat_uno_2020.jpg"
    },
    {
    marca: "Ford", 
    modelo: "Ecosport", 
    ano: 2020, 
    preco: 74500.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "ford_ecosport_2020.jpg"
    }, 
    {
    marca: "Ford", 
    modelo: "Ka", 
    ano: 2018, 
    preco: 41000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    imagem: "ford_ka_2018.jpg"
    }, 
    {
    marca: "Ford", 
    modelo: "Ka", 
    ano: 2019, 
    preco: 44000.00, 
    categoria: "hatch", 
    cor: "prata", 
    cambio: "manual", 
    imagem: "ford_ka_2019.jpg"
    },
    {
    marca: "Ford", 
    modelo: "Ranger XLS", 
    ano: 2021, 
    preco: 187300.00, 
    categoria: "pick up", 
    cor: "branca", 
    cambio: "automático", 
    imagem: "ford_ranger_xls_cd_2021.jpg"
    }, 
    {
    marca: "Honda", 
    modelo: "Civic", 
    ano: 2021, 
    preco: 122000.00, 
    categoria: "sedan", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "honda_civic_2019.jpg"
    }, 
    {
    marca: "Hyundai", 
    modelo: "Creta", 
    ano: 2019, 
    preco: 102000.00, 
    categoria: "SUV", 
    cor: "branca", 
    cambio: "automático", 
    imagem: "hyundai_creta_2019.jpg"
    }, 
    {
    marca: "Hyundai", 
    modelo: "HB20 S", 
    ano: 2019, 
    preco: 52000.00, 
    categoria: "hatch", 
    cor: "preta", 
    cambio: "manual",
    imagem: "hyundai_hb20_s_unique_2019.jpg"
    }, 
    {
    marca: "Hyundai", 
    modelo: "HB20 vision", 
    ano: 2020, 
    preco: 60000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "automático", 
    imagem: "hyundai_hb20_vision_2020.jpg"
    }, 
    {
    marca: "Nissan",
    modelo: "Frontier XE", 
    ano: 2020, 
    preco: 173000.00, 
    categoria: "pick up", 
    cor: "cinza", 
    cambio: "automático",
    imagem: "nissan_frontier_xe_cd_2020.jpg"
    }, 
    {
    marca: "Peugeot", 
    modelo: "208", 
    ano: 2022, 
    preco: 86000.00, 
    categoria: "hatch",
    cor: "branca", 
    cambio: "manual", 
    imagem: "peugeot_208_2022.jpg"
    }, 
    {
    marca: "Peugeot", 
    modelo: "208 Active", 
    ano: 2021, 
    preco: 97500.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "automático", 
    imagem: "peugeot_208_active_2021.jpg"
    }, 
    {
    marca: "Peugeot", 
    modelo: "5008 Griffe", 
    ano: 2019,
    preco: 165200.00, 
    categoria: "minivan", 
    cor: "verde", 
    cambio: "automático",
    imagem: "peugeot_5008_griffe_thp_2019.jpg"
    }, 
    {
    marca: "Renault", 
    modelo: "Captur", 
    ano: 2020, 
    preco: 103000.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "renault_captur_2020.jpg"
    }, 
    {
    marca: "Renault", 
    modelo: "Captur", 
    ano: 2021, 
    preco: 110000.00, 
    categoria: "SUV", 
    cor: "branca", 
    cambio: "automático", 
    imagem: "renault_captur_2021.jpg"
    }, 
    {
    marca: "Renault", 
    modelo: "Duster", 
    ano: 2020, 
    preco: 77200.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "renault_duster_2020.jpg"
    }, 
    {
    marca: "Renault", 
    modelo: "Kwid", 
    ano: 2020, 
    preco: 48000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    imagem: "renault_kwid_2020.jpg"
    }, 
    {
    marca: "Renault", 
    modelo: "Kwid", 
    ano: 2021, 
    preco: 50000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    imagem: "renault_kwid2021.jpg"
    }, 
    {
    marca: "Toyota", 
    modelo: "Corolla", 
    ano: 2019, 
    preco: 97000.00, 
    categoria: "sedan", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "toyota_corolla_2019.jpg"
    }, 
    {
    marca: "Toyota", 
    modelo: "Corolla", 
    ano: 2022, 
    preco: 115000.00, 
    categoria: "sedan", 
    cor: "cinza", 
    cambio: "automático", 
    imagem: "toyota_corolla_2022.jpg"
    }, 
    {
    marca: "Toyota", 
    modelo: "Corolla Cross", 
    ano: 2022, 
    preco: 138600.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "toyota_corolla-cross_2022.jpg"
    }, 
    {
    marca: "Toyota", 
    modelo: "Etios", 
    ano: 2020, 
    preco: 56900.00, 
    categoria: "sedan", 
    cor: "branca", 
    cambio: "manual", 
    imagem: "toyota_etios_2020.jpg"
    },
    {
    marca: "Volkswagen", 
    modelo: "Voyage", 
    ano: 2019, 
    preco: 63200.00, 
    categoria: "sedan", 
    cor: "preta", 
    cambio: "manual", 
    imagem: "volks_Voyage_2019.jpg"
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Voyage", 
    ano: 2020, 
    preco: 68000.00, 
    categoria: "sedan", 
    cor: "branca", 
    cambio: "manual", 
    imagem: "volks_Voyage_2020.jpg"
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Gol Mpi", 
    ano: 2021, 
    preco: 75000.00, 
    categoria: "hatch", 
    cor: "cinza", 
    cambio: "manual",
    imagem: "volkswagen_gol_mpi_2021.jpg"
    },
    {
    marca: "Volkswagen", 
    modelo: "Golf", 
    ano: 2020, 
    preco: 165000.00, 
    categoria: "hatch", 
    cor: "azul", 
    cambio: "automático", 
    imagem: "volkswagen_golf_2020.jpg"
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Jetta Rline", 
    ano: 2020, 
    preco: 130000.00, 
    categoria: "sedan", 
    cor: "branca", 
    cambio: "automático", 
    imagem: "volkswagen_jetta_r-line_2020.jpg"
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Nivus Highline", 
    ano: 2021, 
    preco: 122400.00, 
    categoria: "SUV", 
    cor: "cinza", 
    cambio: "automático", 
    imagem: "volkswagen_nivus_highline_2021.jpg"
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Passat Highline", 
    ano: 2018, 
    preco: 161000.00,
    categoria: "sedan", 
    cor: "preta", 
    cambio: "automático",  
    imagem: "volkswagen_passat_highline_2018.jpg"
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Saveiro Robust", 
    ano: 2021, 
    preco: 65300.00, 
    categoria: "pick up", 
    cor: "branca", 
    cambio: "manual", 
    imagem: "volkswagen_saveiro_robust_2021.jpg"
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Tcross Highline", 
    ano: 2020, 
    preco: 142000.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    imagem: "volkswagen_t-cross_highline_2020.jpg"
    }
]).then(() => console.log("Cars data have been saved to the Database!"));
