function XYZ() {
    let form = document.salondefiestas;
    let total = 0;
    let invitados = parseInt(form.numinv.value) || 0;

    // Comida: asigna precios según opción seleccionada
    if (form.cotind[0].checked) total += invitados * 25;
    if (form.cotind[1].checked) total += invitados * 30;
    if (form.cotind[2].checked) total += invitados * 35;
    if (form.cotind[3].checked) total += invitados * 35;
    if (form.cotind[4].checked) total += invitados * 40;

    // Extras fijos
    if (form.extra1.checked) total += 500;
    if (form.extra2.checked) total += 1000;
    if (form.extra3.checked) total += 500;

    // Extras por persona
    if (form.extra4.checked) total += invitados * 20;
    if (form.extra5.checked) total += invitados * 20;
    if (form.extra6.checked) total += invitados * 10;

    // Descuento si el evento es de lunes a jueves
    let fecha = new Date(form.fechev.value);
    let dia = fecha.getDay(); // 1 = lunes, ..., 4 = jueves
    if (dia >= 1 && dia <= 4) total *= 0.8;

    // Aumento si la hora es después de 4:00 p.m.
    if (form.horhev.value >= "16:00") total *= 1.15;

    // Mostrar total
    form.totcot.value = "$" + total.toFixed(2);
}
