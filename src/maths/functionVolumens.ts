export function calculateSphereVolume(radius: number, n: number): number {
    if(radius === 0){
        return 0
    }
    const step: number = (2 * radius) / n; // Tamaño del paso
    let volume: number = 0;

    for (let i = 0; i < n; i++) {
        // Puntos inicial y final del subintervalo
        const x1: number = -radius + i * step;
        const x2: number = x1 + step;

        // Áreas de la sección circular en los extremos del intervalo
        const f1: number = Math.PI * (radius ** 2 - x1 ** 2);
        const f2: number = Math.PI * (radius ** 2 - x2 ** 2);

        // Aproximación por el método del trapecio
        volume += (f1 + f2) * step / 2;
    }

    return volume;
}


export function calculatePyramidVolume(baseLength: number, height: number, n: number): number {

    if(baseLength === 0 || height === 0){
        return 0
    }
    const step: number = height / n; 
    let volume: number = 0;

    for (let i = 0; i < n; i++) {
        const y1: number = i * step;
        const y2: number = y1 + step;

        const area1: number = Math.pow(baseLength * (height - y1) / height, 2);
        const area2: number = Math.pow(baseLength * (height - y2) / height, 2);

        volume += (area1 + area2) * step / 2;
    }

    return volume;
}

export function calculateCubeVolume(sideLength: number, n: number): number {
    if(sideLength === 0){
        return 0
    }
    const step: number = sideLength / n; 
    let volume: number = 0;

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            for (let z = 0; z < n; z++) {
                volume += step ** 3;
            }
        }
    }

    return volume;
}


export function calculateCapsuleVolume(radius: number, height: number, n: number): number {
    if(radius === 0 || height === 0){
        return 0
    }
    const stepCyl = height / n; 
    const stepHemi = (2 * radius) / n; 
    let volume = 0;

    for (let i = 0; i < n; i++) {
        volume += Math.PI * radius ** 2 * stepCyl;
    }

    for (let i = 0; i < n; i++) {
        const x1 = -radius + i * stepHemi;
        const x2 = x1 + stepHemi;

        const area1 = Math.PI * (radius ** 2 - x1 ** 2);
        const area2 = Math.PI * (radius ** 2 - x2 ** 2);
        volume += (area1 + area2) * stepHemi / 2;
    }

    return volume;
}


