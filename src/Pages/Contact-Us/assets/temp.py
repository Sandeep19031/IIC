string = """Prof. B.K. Mishra
Head
bk@iitgoa.ac.in

Prof. Sachin D Kore
President
sachin@iitgoa.ac.in

Dr. Amaldev Manuel
Vice President
amal@iitgoa.ac.in

Mrs. Shalini M. Sitaraman
IPR Expert, SimSim Advisory
abc@example.com

Mr. Kerkar
Industry Expert, Alcon
abc@example.com

Mr. Prasanta Kumar Sahoo
Union Bank / Corporation Bank
abc@example.com

Mr. D S Prashant
FiiRE (Incubator)
abc@example.com

Dr. Sunil Paul
Convener, Innovation Activity Coordinator
sunil@iitgoa.ac.in

Mr. Rahul Bahadur
Social Media, Startup Activity
rahul@iitgoa.ac.in

Dr. Arindam Das
Member
arindam@iitgoa.ac.in

Dr. Arpita Korwar
NIRF & ARIA Coordinator
arpita@iitgoa.ac.in

Dr. Sreenath Balakrishnan
Member
sreenath@iitgoa.ac.in

Prof. G.V. Prabhu Gaunkar
Member
gvprabhu@iitgoa.ac.in

Dr. Raja Mitra
Member
rajamitra@iitgoa.ac.in

Dr. Santosh Kumar
Member
skumar@iitgoa.ac.in

Dr. Bidhan Pramanik
Member, SES 
bidhan@iitgoa.ac.in

Dr. Nandkumar N P
SPOC, SIH, SES 
npnandakumar@iitgoa.ac.in

Dr. Sashidhar Sampathirao
IPR Coordinator, SES
ssd@iitgoa.ac.in

Dr. Clint Pazhayidam George
Member
clint@iitgoa.ac.in

Prof. Bidyadhar Subudhi
Member, Dean RnD
bidyadhar@iitgoa.ac.in



Deyani Maladkar
Student Innovation Coordinator
devyani.maladkar.18002@iitgoa.ac.in

Mayank Shreshtha
Student IPR, Projects Coordinator
mayank.shreshtha.19063@iitgoa.ac.in

Sarthak Walia
Student Social Media Coordinator
sarthak.19063@iitgoa.ac.in

Twisha Bansal
Student Startup-coordinator
twisha.bansal.19031@iitgoa.ac.in

Shubham Garg
Team Member
shubham.garg.19041@iitgoa.ac.in

Prateek Sen
Team Member
prateek.sen.19041@iitgoa.ac.in

Svara Mehta
Team Member
svara.mehta.19063@iitgoa.ac.in

Meghej Khandelwal
Senior Student Advisor
meghej.khandelwal.17002@iitgoa.ac.in

Devang Jain
GS Academics
devang.jain.18001@iitgoa.ac.in

Shreyas Pawar
GS STAB
shreyas.pawar.18002@iitgoa.ac.in

Saksham Goyal
GS Culturals
saksham.goyal.18003@iitgoa.ac.in

Neeraj Krishnan
Internship coordinator
neeraj.krishnan.18002@iitgoa.ac.in

Vaibhav Kumar Rai
PG-Representative
vaibhav1913107@iitgoa.ac.in



"""


def filterFun(itr):
    return itr != "" or itr != ''


string = string.split("\n")
string = filter(filterFun, string)

l = []
i = 0
while(i < len(string)):
    l.append(
        {"name": string[i], "designation": string[i+1], "email": string[i+2]})
    i += 3

print(l)
