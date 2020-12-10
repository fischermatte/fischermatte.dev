import {Resume} from '../shared/resume.types'

export const resume: Resume = {
  jobs: [
    {
      employer: 'die Mobiliar',
      location: 'Bern, Switzerland',
      period: {
        from: '2018-03-01',
        to: 'Present',
      },
    },
    {
      employer: 'Unisys Switzerland',
      location: 'Bern, Switzerland',
      period: {
        from: '2009-11-01',
        to: '2018-02-01',
      },
    },
    {
      employer: 'Tieto Deutschland GmbH',
      location: 'Berlin, Germany',
      period: {
        from: '2008-08-01',
        to: '2009-09-01',
      },
    },
    {
      employer: 'ARC-GREENLAB GmbH',
      location: 'Berlin, Germany',
      period: {
        from: '2004-03-01',
        to: '2008-07-01',
      },
    },
    {
      employer: 'DER SPIEGEL',
      location: 'Hamburg, Germany',
      period: {
        from: '2001-03-01',
        to: '2001-07-01',
      },
    },
  ],
  educations: [
    {
      title: 'Master of Computer Science, Software Engineering, 2009',
      locations: [
        {
          location: 'Hagen University (Distance Learning University), Germany',
          period: {
            from: '2006-10-01',
            to: '2009-04-01',
          },
        },
      ],
    },
    {
      title: 'Diplom-Ingenieur (FH), Geoinformatics and Cartography, 2005',
      locations: [
        {
          location: 'University of Applied Sciences Karlsruhe, Germany',
          period: {
            from: '1999-10-01',
            to: '2005-03-01',
          },
        },
        {
          location: 'Lomonosov Moscow State University, Russia',
          period: {
            from: '2001-10-01',
            to: '2002-06-01',
          },
        },
      ],
    },
  ],
  certificates: [
    {
      name: 'Certified Professional for Software Architecture (CPSA-F)',
      time: '2020-03-05',
      url: 'https://www.isaqb.org/certifications/foundation-level/',
    },
    {
      name: 'Cloud Foundry Certified Developer (CFCD)',
      time: '2018-05-09',
      url: 'https://training.linuxfoundation.org/certification/cloud-foundry-certified-developer-cfcd/',
    },
    {
      name: 'Certified Spring Professional',
      time: '2016-10-27',
      url: 'https://tanzu.vmware.com/training/certification/spring-professional-certification',
    },
    {
      name: 'Oracle Certified Professional Java Programmer',
      time: '2011-03-07',
      url: 'https://education.oracle.com/oracle-certified-professional-java-se-8-programmer/trackp_357',
    },
    {
      name: 'Certified PrimeFaces Developer',
      time: '2013-11-25',
      url: 'https://www.primefaces.org/primefaces-certification/',
    },
    {
      name: 'Hermes Foundation',
      time: '2014-02-12',
      url: 'https://www.hermes.admin.ch/',
    },
  ],
}
