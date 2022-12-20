export const greeting = (name) => {
    console.log('Making an h1 tag');

    const h1 = document.createElement('h1');
    h1.innerText = `Hi, ${name}`;
    document.body.append(h1);
}
