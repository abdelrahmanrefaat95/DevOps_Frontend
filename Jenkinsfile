@Library('devops-library') _  // Load the shared library

pipeline {
  
  agent any
  
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
        stage('Start FE') {
            steps {
                script {
                    ngStart()  // Calls vars/mvnInstall.groovy
                }
            }
        }
      }
  }
