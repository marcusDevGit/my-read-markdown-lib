export default {
  transform: {'^.+\\.js$': 'babel-jest',
},
transformIgnorePatterns: [
    '/node_modules/(?!(chalk|#ansi-styles)/)', // Inclua aqui pacotes que devem ser transformados
  ],

};