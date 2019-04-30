pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
  }
  post {
    always {
      junit '*.xml'
    }
  }
}