const propiedades_alquiler = [
    {
        nombre: 'Departamento en el centro',
        src: 'assets/imgs/departamento_centro.jpg',
        descripcion: 'Hermoso apartamento en el corazón de la ciudad.',
        ubicacion: 'Centro',
        habitaciones: 2,
        costo: 500000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa suburbana',
        src: 'assets/imgs/casa_suburbana.jpg',
        descripcion: 'Espaciosa casa en un tranquilo vecindario suburbano.',
        ubicacion: 'Suburbios',
        habitaciones: 4,
        costo: 800000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Loft moderno',
        src: 'assets/imgs/loft.jpg',
        descripcion: 'Elegante loft con diseño contemporáneo.',
        ubicacion: 'Centro',
        habitaciones: 1,
        costo: 700000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cabaña rústica',
        src: 'assets/imgs/cabaña.jpg',
        descripcion: 'Encantadora cabaña en las montañas.',
        ubicacion: 'Montañas',
        habitaciones: 3,
        costo: 600000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo',
        src: 'assets/imgs/penthouse.jpg',
        descripcion: 'Increíble penthouse con vistas panorámicas.',
        ubicacion: 'Centro',
        habitaciones: 4,
        costo: 1200000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento económico',
        src: 'assets/imgs/departamento_economico.jpg',
        descripcion: 'Apartamento accesible y bien ubicado.',
        ubicacion: 'Suburbios',
        habitaciones: 2,
        costo: 400000,
        smoke: true,
        pets: false
    }
];

const propiedades_venta = [
    {
        nombre: 'Villa lujosa',
        src: 'assets/imgs/mansion.jpg',
        descripcion: 'Impresionante villa con todas las comodidades modernas.',
        ubicacion: 'Costa',
        habitaciones: 5,
        costo: 200000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de campo',
        src: 'assets/imgs/casa_de_campo.jpg',
        descripcion: 'Acogedora casa en un entorno rural idílico.',
        ubicacion: 'Campo',
        habitaciones: 3,
        costo: 120000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento urbano',
        src: 'assets/imgs/apartamento_urbano.jpg',
        descripcion: 'Moderno apartamento en el centro de la ciudad.',
        ubicacion: 'Centro',
        habitaciones: 2,
        costo: 150000000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Mansión de lujo',
        src: 'assets/imgs/mansion_delujo.jpg',
        descripcion: 'Magnífica mansión con jardines privados.',
        ubicacion: 'Suburbios',
        habitaciones: 6,
        costo: 150500000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa familiar',
        src: 'assets/imgs/casa_familiar.jpg',
        descripcion: 'Cómoda casa perfecta para familias.',
        ubicacion: 'Suburbios',
        habitaciones: 4,
        costo: 70000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Penthouse exclusivo',
        src: 'assets/imgs/penthouse_lujoso.jpg',
        descripcion: 'Exclusivo penthouse con vistas espectaculares.',
        ubicacion: 'Centro',
        habitaciones: 3,
        costo: 300000000,
        smoke: false,
        pets: false
    }
];

function renderizarPropiedades(tipo) {
    let propiedades = [];
    if (tipo === 'venta') {
        propiedades = propiedades_venta;
    } else if (tipo === 'alquiler') {
        propiedades = propiedades_alquiler;
    }

    const contenedor = document.getElementById(tipo);
    contenedor.innerHTML = '';

    propiedades.slice(0, 3).forEach(propiedad => {
        contenedor.innerHTML += `
            <div class="property">
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
                <h3>${propiedad.nombre}</h3>
                <p>${propiedad.descripcion}</p>
                <p>Ubicación: ${propiedad.ubicacion}</p>
                <p>Habitaciones: ${propiedad.habitaciones}</p>
                <p>Costo: $${propiedad.costo}</p>
                <p>${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}</p>
                <p>${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
            </div>
        `;
    });
}

function verMas(tipo) {
    window.location.href = `propiedades_${tipo}.html`;
}

window.onload = function() {
    if (document.getElementById('venta')) {
        renderizarPropiedades('venta');
    }
    if (document.getElementById('alquiler')) {
        renderizarPropiedades('alquiler');
    }
    if (document.getElementById('lista-venta')) {
        renderizarPropiedadesCompleta('venta');
    }
    if (document.getElementById('lista-alquiler')) {
        renderizarPropiedadesCompleta('alquiler');
    }
};

function renderizarPropiedadesCompleta(tipo) {
    let propiedades = [];
    if (tipo === 'venta') {
        propiedades = propiedades_venta;
    } else if (tipo === 'alquiler') {
        propiedades = propiedades_alquiler;
    }

    const contenedor = document.getElementById(`lista-${tipo}`);
    contenedor.innerHTML = '';

    propiedades.forEach(propiedad => {
        contenedor.innerHTML += `
            <div class="property">
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
                <h3>${propiedad.nombre}</h3>
                <p>${propiedad.descripcion}</p>
                <p>Ubicación: ${propiedad.ubicacion}</p>
                <p>Habitaciones: ${propiedad.habitaciones}</p>
                <p>Costo: $${propiedad.costo}</p>
                <p>${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}</p>
                <p>${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
            </div>
        `;
    });
}
