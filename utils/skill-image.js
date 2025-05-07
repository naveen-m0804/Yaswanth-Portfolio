import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import c from '../app/assets/svg/skills/c.svg';
import css from '../app/assets/svg/skills/css.svg';
import dart from '../app/assets/svg/skills/dart.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import pandas from '../app/assets/svg/skills/pandas.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import linux from '../app/assets/svg/skills/linux.svg'


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'angular':
      return angular;
    case 'aws':
      return aws;
    case 'azure':
      return azure;
    case 'bootstrap':
      return bootstrap;
    case 'c':
      return c;
    case 'css':
      return css;
    case 'dart':
      return dart;
    case 'django':
      return django;
    case 'docker':
      return docker;
    case 'git':
      return git;
    case 'html':
      return html;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'microsoftoffice':
      return microsoftoffice;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'nextjs':
      return nextJS;
    case 'python':
      return python;
    case 'react':
      return react;
    case 'tailwind':
      return tailwind;
    case 'typescript':
      return typescript;
    case 'vitejs':
      return vitejs;
    case 'pandas':
      return pandas;
    case 'dotnet':
      return dotnet;
    case 'linux':
      return linux;
    default:
      return null; // Optional: fallback image like defaultSkillIcon if you want
  }
};
