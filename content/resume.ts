import {Resume} from '../src/core/shared/resume.types'

export const resume: Resume = {
  jobs: [
    {
      employer: 'Federal Office of Information Technology, Systems and Telecommunication FOITT',
      location: 'Zollikofen, Switzerland',
      url: 'https://www.bit.admin.ch',
      period: {
        from: '2021-09-15',
        to: '',
      },
    },
    {
      employer: 'die Mobiliar',
      location: 'Bern, Switzerland',
      url: 'https://www.mobiliar.ch',
      period: {
        from: '2018-03-01',
        to: '2021-07-31',
      },
    },
    {
      employer: 'Unisys Switzerland',
      location: 'Bern, Switzerland',
      url: 'https://www.unisys.ch',
      period: {
        from: '2009-11-01',
        to: '2018-02-01',
      },
    },
    {
      employer: 'Tieto Deutschland GmbH',
      location: 'Berlin, Germany',
      url: 'https://www.tieto.com/de/ueber-uns/tieto-germany',
      period: {
        from: '2008-08-01',
        to: '2009-09-01',
      },
    },
    {
      employer: 'ARC-GREENLAB GmbH',
      location: 'Berlin, Germany',
      url: 'https://www.arc-greenlab.de',
      period: {
        from: '2004-03-01',
        to: '2008-07-01',
      },
    },
    {
      employer: 'DER SPIEGEL',
      location: 'Hamburg, Germany',
      url: 'https://www.spiegelgruppe.de',
      period: {
        from: '2001-03-01',
        to: '2001-07-01',
      },
    },
  ],
  educations: [
    {
      title: 'Master of Computer Science, Software Engineering, 2009',
      url: 'https://www.fernuni-hagen.de/mi/studium/msc_informatik',
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
      url: 'https://www.hs-karlsruhe.de/en/geomatics',
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
      name: 'Azure Developer Associate (AZ-204)',
      time: '2021-03-04',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/exams/az-204',
    },
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
