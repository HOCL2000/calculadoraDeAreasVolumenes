export function calculateTriangleArea(base: number, height: number, n: number): number {
    const stepX = base / n; 
    let area = 0;

    for (let i = 0; i < n; i++) {
        const x1 = i * stepX;
        const x2 = x1 + stepX;

        const y1 = (height / base) * x1;
        const y2 = (height / base) * x2;

        const segmentArea = ((y1 + y2) / 2) * stepX;
        area += segmentArea;
    }

    return area;
}


export function calculateHexagonAreaWithApotemaAndSideLength(apotema: number,sideLength: number,n: number): number {
    const step = sideLength / n; 
    let totalArea = 0;

    for (let i = 0; i < 6; i++) {

        for (let j = 0; j < n; j++) {
            const x1 = j * step;
            const x2 = x1 + step;

            const y1 = apotema - (apotema / sideLength) * x1;
            const y2 = apotema - (apotema / sideLength) * x2;

            const trapezoidArea = ((y1 + y2) / 2) * step;
            totalArea += trapezoidArea;
        }
    }

    return totalArea;
}


export function calculateCircleArea(radius: number, n: number): number {
    const step = radius / n; 
    let totalArea = 0;

    for (let i = 0; i < n; i++) {
        const r1 = i * step;
        const r2 = r1 + step;

        const ringArea = Math.PI * (Math.pow(r2, 2) - Math.pow(r1, 2));
        totalArea += ringArea;
    }

    return totalArea;
}



export function calculateRhombusAreaNumerical(diagonal1: number, diagonal2: number, n: number): number {
    // if (diagonal1 <= 0 || diagonal2 <= 0 || n <= 0) {
    //     throw new Error("Las diagonales y el número de pasos deben ser mayores que 0.");
    // }

    const halfD1 = diagonal1 / 2;
    const halfD2 = diagonal2 / 2;

    const step = diagonal1 / n; 
    let totalArea = 0;

    for (let i = 0; i < n; i++) {
        const x1 = -halfD1 + i * step;
        const x2 = x1 + step;

        const y1 = halfD2 * (1 - Math.abs(x1 / halfD1));
        const y2 = halfD2 * (1 - Math.abs(x2 / halfD1));

        const trapezoidArea = ((y1 + y2) / 2) * step;
        totalArea += trapezoidArea;
    }

    return totalArea * 2; // Consideramos ambas mitades del rombo
}