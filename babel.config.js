module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',//Adicionar o preset do typescript
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
}