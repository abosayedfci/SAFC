using System;
using System.Collections.Generic;
using System.Text;
using SAFC.Domain.Core.Enum;
namespace SAFC.Domain.Core
{
  public  class ReservationRequest
    {
        public ReservationRequest(int id,int guestNumber , DateTime reservDate , MenuTypeEnum menuType , string notes)
        {
            this.ID = id;
            this.GuestsNumber = guestNumber;
            this.ReservationDate = reservDate;
            this.MenuType = menuType;
            this.Notes = notes; 
          
        }
        public ReservationRequest() { }
        public int ID { get; private set; }
        public int GuestsNumber { get; private set; }
        public DateTime ReservationDate  { get; private set; }
        public MenuTypeEnum MenuType { get; private set; }
        public string Notes { get; private set; }
    }
}
