'use strict';

angular.module('ices').controller('news', function() {
    this.news = [ 
          {
            title: 'TITLE_ENCUENTRO_2017',
            image: 'news/images/40_full-360x370.jpg',
            descr: 'DESC_ENCUENTRO_2017',
            link:  '#!/post_encuentro2017'
        },
        {
            title: 'TITLE_BUZON',
            image: 'news/images/logo_buzon_academico2.png',
            descr: 'DESC_SUMMARY_BUZON',
            link:  '#!/post_buzon'
        },
        {
            title: 'TITLE_PAPAYAPODS',
            image: 'news/images/papayapods-280x204.png',
            descr: 'DESC_SUMMARY_PAPAYAPODS',
            link: '#!/post_papayapods'
        },
        {
            title: 'TITLE_TRUMP',
            image: 'news/images/trump-280x204.jpg',
            descr: 'DESC_SUMMARY_TRUMP'
        },
        {
            title: 'TITLE_ENCUENTRO_2016',
            image: 'news/images/foto-oficial-encuentro-2016-280x204.gif',
            descr: 'DESC_SUMMARY_ENCUENTRO_2016',
        },
        {
            title: 'TITLE_REGISTRO_CHILENOS',
            image: 'news/images/chilenos_extranjero.jpg',
            descr: 'DESC_SUMMARY_REGISTRO_CHILENOS',
        },
        {
            title: 'TITLE_AVISO_ENCUENTRO_2016',
            image: 'news/images/noticia-ices-280x204.jpg',
            descr: 'DESC_SUMMARY_AVISO_ENCUENTRO'
        },
        {
            title: 'TITLE_CHILE_GLOBAL',
            image: 'news/images/foto-oficial-encuentro-2016-280x204.gif',
            descr: 'DESC_CHILE_GLOBAL'
        },
        {
            title: 'TITLE_CONSTRUYENDO_PUENTES',
            image: 'news/images/GCO_6737_mod_logo-280x204.jpg',
            descr: 'DESC_CONSTRUYENDO_PUENTES'
        },
        {
            title: 'TITLE_ENCUENTRO_GLOBAL_2015',
            image:'news/images/encuentroGlobal.jpg',
            descr:'DESC_ENCUENTRO_GLOBAL'
        },
        {
            title: 'TITLE_CREACION_ICES',
            image:'news/images/N5-280x204.jpg',
            descr:'DESC_CREACION_ICES'
        },
        {
            title: 'TITLE_ETH_APOYO',
            image:'news/images/N3-ETH-Global-Medium-280x204.jpg',
            descr:'DESC_ETH_APOYO'
        },
        {
            title: 'TITLE_ICES_EMBAJADOR',
            image:'news/images/N2-Embajada-Medium-280x204.jpg',
            descr:'DESC_ICES_EMBAJADOR'
        },
        {
            title: 'TITLE_BERNA_2014',
            image:'news/images/N1-primer-encuentro-280x204.jpg',
            descr:'DESC_BERNA_2014'
        }
    ]

    // TODO: Investigate why the facebook section
    //       needs to be reloaded on route changes.
    if(typeof FB !== 'undefined') { FB.XFBML.parse(); }
});