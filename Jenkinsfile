@Library('devops-library') _  // Load the shared library

pipeline {
  
  agent {
            label 'ubuntu-slave'  
        }
  
  stages {
      stage('Hello') {
          steps {
              script {
                  hello()  // Calls vars/hello.groovy
              }
          }
      }
      stage('Install FE') {
            steps {
                script {
                    ngInstall()  // Calls vars/mvnInstall.groovy
                }
            }
        }
      }
  }
