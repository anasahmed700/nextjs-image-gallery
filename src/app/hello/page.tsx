export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // throw Error('Code phat gya');
    return <div>Hello, NextJS 13!</div>
}
