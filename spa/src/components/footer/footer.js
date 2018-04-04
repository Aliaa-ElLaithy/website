export default {
   name: 'FooterComponent',
   components: {},
   data: () => ({
      title: '',
      description: 'هذا الموقع تم وضعة كمرجع لدروس و ورش العمل التي تم وضعها في مبادرة المليون مبرمج عربي, حرصت على أن تكون الدروس مبسطة وتستهدف بشكل رئيسي من لديهم خبرة صفر في هذا المجال لهذا إن لم تكن جزء من برنامج المليون مبرمج عربي فبإمكانك الإستفادة من هذه الدروس ولوضع أسئلتك أو إستفساراتك قم بالإنضمام لقروب الفيس بوك الخاص بنا',
      socials: [{
            icon: 'fab fa-facebook',
            url: 'https://www.facebook.com/groups/ProgrammersUnion/'
         },
         {
            icon: 'fab fa-twitter',
            url: ''
         },
         {
            icon: 'fab fa-google-plus',
            url: ''
         },
         {
            icon: 'forum',
            url: 'https://coretabs.freeflarum.com'
         }
      ]
   }),
   created() {
      this.title = this.$store.state.title
   }
}
