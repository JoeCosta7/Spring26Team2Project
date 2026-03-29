import Image from "next/image";
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'


export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // const { data: users } = await supabase.from('users').select()

  return (
    <div>
 
    </div>
  );
}
